namespace ProjectTemplate.Core.Types;

public class Pagination
{
    public int TotalPage { get; set; }
    public int TotalCount { get; set; }
    public int CurrentPage { get; set; }
    public int PageSize { get; set; }
}