using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using ProjectTemplate.API.Commons;
using ProjectTemplate.API.Models.Authentication;
using ProjectTemplate.Application.Modules.Authentication;
using ProjectTemplate.Application.Modules.Users.Commands.CreateUser;
using ProjectTemplate.Application.Modules.Users.Queries.GetUsers;
using ProjectTemplate.Core.Configurations;

namespace ProjectTemplate.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthenticationController : ApiControllerBase
{
    private readonly IMediator _mediator;
    private readonly IAuthenticationServices _authenticationServices;
    private readonly BearerTokenConfiguration _bearerTokenConfiguration;
    private readonly IMapper _mapper;

    public AuthenticationController(IMediator mediator, IAuthenticationServices authenticationServices, IOptions<BearerTokenConfiguration> bearerTokenConfiguration, IMapper mapper)
    {
        _mediator = mediator;
        _authenticationServices = authenticationServices;
        _bearerTokenConfiguration = bearerTokenConfiguration.Value;
        _mapper = mapper;
    }
    [Route("login")]
    [HttpPost]
    public async Task<IActionResult> Login([FromBody]LoginModel model)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var user =await _authenticationServices.FindUser(model.UserName);
        if (user is null) return NotFound();
        
        if (! await _authenticationServices.IsPasswordValid(user, model.Password)) return Unauthorized();
        
        var token = _authenticationServices.GenerateBearerToken(_bearerTokenConfiguration.Key, _bearerTokenConfiguration.Issuer, _bearerTokenConfiguration.Audience, _bearerTokenConfiguration.ExpirationMinutes, user);
        var result = _mapper.Map<LoginResponse>(user);
        result.Token = token;
        return Ok(result);
    }

    
    [Route("superadmin")]
    [HttpPost]
    public async Task<IActionResult> SuperAdmin()
    {
        var queryGetUsers = new GetUsersQueryRequest()
        {
            Keywords = string.Empty
        };
        var users = await _mediator.Send(queryGetUsers);

        if (!users.Any())
        {
            var queryCreateUsers = new CreateUserCommandRequest()
            {
                UserName = "admin",
                Password = "admin",
                FirstName = "admin",
                LastName = "admin",
                Email = "admin@domain.com",
                Phone = "123456789",
                Roles = new List<Guid>()
                {
                    new Guid("00000000-0000-0000-0001-000000000000")
                }
            };
            await _mediator.Send(queryCreateUsers);

            return NoContent();
        }
        else
        {
            return BadRequest();
        }
    }
    
    [Route("logout")]
    [HttpPost]
    [Authorize]
    public IActionResult Logout()
    {
        return Ok();
    }

}