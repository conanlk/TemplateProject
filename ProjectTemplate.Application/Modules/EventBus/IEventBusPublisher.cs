namespace ProjectTemplate.Application.Modules.EventBus;

public interface IEventBusPublisher
{
    void SendMessage<T>(T message, string queue);
}