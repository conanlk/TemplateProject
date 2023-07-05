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
using ProjectTemplate.Application.Modules.Tokens;
using ProjectTemplate.Application.Modules.Users.Commands.CreateUser;
using ProjectTemplate.Application.Modules.Users.Commands.DeleteUser;
using ProjectTemplate.Application.Modules.Users.Commands.UpdateUser;
using ProjectTemplate.Application.Modules.Users.Queries.GetUser;
using ProjectTemplate.Application.Modules.Users.Queries.GetUsers;
using ProjectTemplate.Core.Configurations;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;
using ProjectTemplate.InfraStructure.Contexts;
using ProjectTemplate.InfraStructure.Services;

var builder = WebApplication.CreateBuilder(args);

// Configure Authentication and Authorization
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(o =>
{
    var key = Encoding.UTF8.GetBytes(builder.Configuration["Bearer:Key"]!);
    o.SaveToken = true;
    o.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Bearer:Issuer"],
        ValidAudience = builder.Configuration["Bearer:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(key)
    };
});

builder.Services.AddSwaggerGen(c =>
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

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext
builder.Services.AddDbContext<MigrationContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default"), 
        x => x.MigrationsAssembly("ProjectTemplate.API")));

builder.Services.AddDbContext<DefaultDbContext>(options =>
    options.UseLazyLoadingProxies().UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// Configure services
builder.Services.AddScoped<IUserRepository, UserServices>();
builder.Services.AddScoped<IAuthenticationServices, AuthenticationServices>();
builder.Services.AddScoped<IEncryptServices, EncryptServices>();
builder.Services.AddScoped<ITokenServices, TokenServices>();
builder.Services.AddScoped<IRequestHandler<GetUsersQueryRequest, IEnumerable<User>>, GetUsersQueryHandler>();
builder.Services.AddScoped<IRequestHandler<GetUserQueryRequest, User?>, GetUserQueryHandler>();
builder.Services.AddScoped<IRequestHandler<CreateUserCommandRequest, Guid>, CreateUserCommandHandler>();
builder.Services.AddScoped<IRequestHandler<UpdateUserCommandRequest, User>, UpdateUserCommandHandler>();
builder.Services.AddScoped<IRequestHandler<DeleteUserCommandRequest, bool>, DeleteUserCommandHandler>();

// Configure configuration
builder.Services.Configure<BearerTokenConfiguration>(builder.Configuration.GetSection("Bearer"));

// Configure Json
builder.Services.AddControllers(options=> 
        options.Filters.Add<ExceptionFilter>()
    )
    .AddNewtonsoftJson(options =>
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
    );

// Configure Logger
builder.Services.AddLogging(options =>
    {
        options.ClearProviders();
        options.SetMinimumLevel(LogLevel.Trace);
        options.AddNLog();
    }
);

// Configure MediatR
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

// Configure AutoMapper
builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);

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