namespace ProjectTemplate.API.Models.User;

public class SearchUserRequest
{
    public string Keywords { get; set; } = string.Empty;
    public int Page { get; set; } 
    public int PageSize { get; set; }
}