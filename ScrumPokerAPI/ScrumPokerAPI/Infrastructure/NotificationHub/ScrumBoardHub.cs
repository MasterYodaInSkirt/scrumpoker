using Microsoft.AspNetCore.SignalR;

namespace ScrumPokerAPI.Infrastructure.NotificationHub
{
    public class ScrumBoardHub : Hub
    {
        public async override Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            await Clients.Caller.SendAsync("Message", "Connected successfully!");
        }

        public async Task SubscribeToBoard(Guid boardId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, boardId.ToString());
            await Clients.Caller.SendAsync("Message", "Added to board successfully!");
        }
    }
}
