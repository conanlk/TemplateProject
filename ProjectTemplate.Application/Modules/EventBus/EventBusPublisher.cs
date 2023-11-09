using System.Text;
using Newtonsoft.Json;
using RabbitMQ.Client;

namespace ProjectTemplate.Application.Modules.EventBus;

public class EventBusPublisher : IEventBusPublisher
{
    public void SendMessage<T>(T message, string queue)
    {
        var factory = new ConnectionFactory { HostName = "localhost" };
        using var connection = factory.CreateConnection();
        using var chanel = connection.CreateModel();
        
        chanel.QueueDeclare(queue, exclusive:false);
        var json = JsonConvert.SerializeObject(message);
        var body = Encoding.UTF8.GetBytes(json);
        chanel.BasicPublish(exchange:"", routingKey:queue, body:body);
    }
}