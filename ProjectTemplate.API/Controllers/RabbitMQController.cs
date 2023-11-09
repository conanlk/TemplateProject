using Microsoft.AspNetCore.Mvc;
using ProjectTemplate.API.Commons;
using ProjectTemplate.Application.Modules.EventBus;

namespace ProjectTemplate.API.Controllers;

public class RabbitMQController : ApiControllerBase
{
    private readonly IEventBusPublisher _eventBusPublisher;

    public RabbitMQController(IEventBusPublisher eventBusPublisher)
    {
        _eventBusPublisher = eventBusPublisher;
    }

    [HttpGet("send-message")]
    public IActionResult SendMessage(string message)
    {
        _eventBusPublisher.SendMessage(message, "Hello");
        return Ok();
    }
}