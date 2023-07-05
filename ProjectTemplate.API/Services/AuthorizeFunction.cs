using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;

namespace ProjectTemplate.API.Services;

public class AuthorizeFunctionAttribute : TypeFilterAttribute
{
    public AuthorizeFunctionAttribute(string roles) : base(typeof(AuthorizeFunctionFilter))
    {
        Arguments = new object[] { roles };
    }
}

public class AuthorizeFunctionFilter : IAuthorizationFilter
{
    private readonly string _roles;

    public AuthorizeFunctionFilter(string roles)
    {
        _roles = roles;
    }
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var identity = context.HttpContext.User.Identity as ClaimsIdentity;
        if (identity != null)
        {
            IEnumerable<Claim> claims = identity.Claims; 
            if (!UserHasAccess(claims, _roles))
            {
                context.Result = new ForbidResult();
            }
        }
        else
        {
            context.Result = new UnauthorizedResult();
        }
    }
    private bool UserHasAccess(IEnumerable<Claim> claims, string roles)
    {
        foreach (var s in roles.Split(';'))
        {
            var userRoles = JsonConvert.DeserializeObject<List<string>>(claims.SingleOrDefault(p => p.Type == "Roles").Value);
            if (userRoles.Any(p => p == s)) return true;
        }

        return false;
    }
}