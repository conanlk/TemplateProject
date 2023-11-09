using System.Reflection;
using System.Text;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using ProjectTemplate.Database.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NLog.Extensions.Logging;
using ProjectTemplate.API.Services;
using ProjectTemplate.Application.Modules.Authentication;
using ProjectTemplate.Application.Modules.Encrypt;
using ProjectTemplate.Application.Modules.EventBus;
using ProjectTemplate.Application.Modules.Tokens;
using ProjectTemplate.Application.Modules.Users.Commands.CreateUser;
using ProjectTemplate.Application.Modules.Users.Commands.DeleteUser;
using ProjectTemplate.Application.Modules.Users.Commands.UpdateUser;
using ProjectTemplate.Application.Modules.Users.Queries.GetUser;
using ProjectTemplate.Application.Modules.Users.Queries.GetUserByUserNameOrEmail;
using ProjectTemplate.Application.Modules.Users.Queries.GetUsers;
using ProjectTemplate.Core.Configurations;
using ProjectTemplate.Core.Types;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;
using ProjectTemplate.InfraStructure.Contexts;
using ProjectTemplate.InfraStructure.Services;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

var builder = WebApplication.CreateBuilder(args);

// Configuration
Configuration(builder.Services, builder.Configuration);
ConfigureRabbitMQ();

var app = builder.Build();  

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

// Configure

void Configuration(IServiceCollection services, ConfigurationManager configuration)
{
    
    // Configure Authentication and Authorization
    services.AddAuthentication(x =>
    {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(o =>
    {
        var key = Encoding.UTF8.GetBytes(configuration["Bearer:Key"]!);
        o.SaveToken = true;
        o.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = configuration["Bearer:Issuer"],
            ValidAudience = configuration["Bearer:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(key)
        };
    });

    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "API Documentation", Version = "v1" });
        c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            Type = SecuritySchemeType.Http,
            Scheme = "bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header,
            Description = "JWT Authorization header using the Bearer scheme",
        });
        c.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
                },
                new string[] { }
            }
        });
    });

    services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();

    // Configure Migration DbContext
    services.AddDbContext<MigrationContext>(options =>
        options.UseSqlServer(configuration.GetConnectionString("Default"), 
            x => x.MigrationsAssembly("ProjectTemplate.API")));
    
    // Configure Application Queries DbContext
    services.AddDbContext<QueryDbContext>(options =>
        options.UseLazyLoadingProxies().UseSqlServer(configuration.GetConnectionString("Default")));
    
    // Configure Application Commands DbContext
    services.AddDbContext<CommandDbContext>(options =>
        options.UseLazyLoadingProxies().UseSqlServer(configuration.GetConnectionString("Default")));

    // Configure services
    services.AddScoped<IUserRepositoryCommands, UserServiceCommands>();
    services.AddScoped<IUserRepositoryQueries, UserServiceQueries>();
    services.AddScoped<IAuthenticationServices, AuthenticationServices>();
    services.AddScoped<IEncryptServices, EncryptServices>();
    services.AddScoped<ITokenServices, TokenServices>();
    services.AddScoped<IEventBusPublisher, EventBusPublisher>();
    services.AddScoped<IRequestHandler<GetUsersQueryRequest, (Pagination, IEnumerable<User>)>, GetUsersQueryHandler>();
    services.AddScoped<IRequestHandler<GetUserQueryRequest, User?>, GetUserQueryHandler>();
    services.AddScoped<IRequestHandler<GetUserByUserNameOrEmailQueryRequest, User?>, GetUserByUserNameOrEmailHandler>();
    services.AddScoped<IRequestHandler<CreateUserCommandRequest, Guid>, CreateUserCommandHandler>();
    services.AddScoped<IRequestHandler<UpdateUserCommandRequest, User>, UpdateUserCommandHandler>();
    services.AddScoped<IRequestHandler<DeleteUserCommandRequest, bool>, DeleteUserCommandHandler>();

    // Configure configuration
    services.Configure<BearerTokenConfiguration>(configuration.GetSection("Bearer"));
    services.Configure<PaginationConfiguration>(configuration.GetSection("Pagination"));

    // Configure Json
    services.AddControllers(options=> 
            options.Filters.Add<ExceptionFilter>()
        )
        .AddNewtonsoftJson(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
        );

    // Configure Logger
    services.AddLogging(options =>
        {
            options.ClearProviders();
            options.SetMinimumLevel(LogLevel.Trace);
            options.AddNLog();
        }
    );

    // Configure MediatR
    services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

    // Configure AutoMapper
    services.AddAutoMapper(typeof(MappingProfile).Assembly);

}

void ConfigureRabbitMQ()
{
    var factory = new ConnectionFactory
    {
        HostName = "localhost"
    };
    var connection = factory.CreateConnection();
    using var channel = connection.CreateModel();
    channel.QueueDeclare("Hello", exclusive: false);
    var consumer = new EventingBasicConsumer(channel);
    consumer.Received += (model, eventArgs) =>
    {
        var body = eventArgs.Body.ToArray();
        var message = Encoding.UTF8.GetString(body);
        Console.WriteLine($"Message received: {message}");
        channel.BasicReject(eventArgs.DeliveryTag, true);
    };
    channel.BasicConsume(queue: "Hello", autoAck: false, consumer: consumer);
    Console.WriteLine($"Connected to RabbitMQ");
    Console.ReadKey();
}