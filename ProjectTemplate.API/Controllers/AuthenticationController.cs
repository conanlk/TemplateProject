using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using ProjectTemplate.API.Commons;
using ProjectTemplate.API.Models.Authentication;
using ProjectTemplate.Application.Modules.Authentication;
using ProjectTemplate.Core.Configurations;

namespace ProjectTemplate.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthenticationController : ApiControllerBase
{
    private readonly IAuthenticationServices _authenticationServices;
    private readonly BearerTokenConfiguration _bearerTokenConfiguration;
    private readonly IMapper _mapper;

    public AuthenticationController(IAuthenticationServices authenticationServices, IOptions<BearerTokenConfiguration> bearerTokenConfiguration, IMapper mapper)
    {
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
        
    [Route("logout")]
    [HttpPost]
    [Authorize]
    public IActionResult Logout()
    {
        return Ok();
    }

}