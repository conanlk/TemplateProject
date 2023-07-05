using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace ProjectTemplate.API.Services;

public class ExceptionFilter : IExceptionFilter
{
    private readonly ILogger<ExceptionFilter> _logger;

    public ExceptionFilter(ILogger<ExceptionFilter> logger)
    {
        _logger = logger;
    }
    
    public void OnException(ExceptionContext context)
    {
        var errorCode = Guid.NewGuid();
        _logger.LogError("{Message}", $"{context.ActionDescriptor.DisplayName}| {errorCode} - {context.Exception.Message}");
        context.ExceptionHandled = true;
        context.HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
        context.Result = new JsonResult( new
        {
            ErrorMessage = $"Internal server error with error code - {errorCode}"
        });
    }
}