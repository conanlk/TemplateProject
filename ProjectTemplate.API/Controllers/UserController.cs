using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectTemplate.API.Commons;
using ProjectTemplate.API.Models.User;
using ProjectTemplate.API.Services;
using ProjectTemplate.Application.Modules.Users.Commands.CreateUser;
using ProjectTemplate.Application.Modules.Users.Commands.DeleteUser;
using ProjectTemplate.Application.Modules.Users.Commands.UpdateUser;
using ProjectTemplate.Application.Modules.Users.Queries.GetUser;
using ProjectTemplate.Application.Modules.Users.Queries.GetUsers;

namespace ProjectTemplate.API.Controllers;

[ApiController]
[Authorize]
[AuthorizeFunction("Administrator")]
[Route("api/[controller]")]
public class UserController : ApiControllerBase
{
    private readonly IMediator _mediator;
    private readonly IMapper _mapper;

    public UserController(IMediator mediator, IMapper mapper)
    {
        _mediator = mediator;
        _mapper = mapper;
    }
    
    // GET List
    [HttpGet]
    public async Task<IActionResult> List([FromQuery]SearchUserRequest request)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var query = new GetUsersQueryRequest()
        {
            Keywords = request.Keywords
        };
        var users = await _mediator.Send(query);
        return Ok(_mapper.Map<IEnumerable<SearchUserResponse>>(users));
    }
    
    // GET Single
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Single(Guid id)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var query = new GetUserQueryRequest()
        {
            UserId = id
        };
        
        var user = await _mediator.Send(query);
        if (user is null) return NotFound();
        
        return Ok(_mapper.Map<UserResponse>(user));
    }
    
    // POST
    [HttpPost]
    public async Task<IActionResult> Add([FromBody]AddUserRequest request)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var query =_mapper.Map<CreateUserCommandRequest>(request) ;
            
        return Ok(new{UserId = await _mediator.Send(query)});
    }
    
    // PUT
    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, [FromBody]UpdateUserRequest request)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var user = await _mediator.Send(new GetUserQueryRequest()
        {
            UserId = id
        });
        if (user is null) return NotFound();
        
        var query =_mapper.Map<UpdateUserCommandRequest>(request) ;
        query.UserId = user.UserId;
        
        await _mediator.Send(query);
        return NoContent();
    }
    
    // DELETE
    [HttpDelete("{id:guid}")]
    public  async Task<IActionResult> Delete(Guid id)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var user = await _mediator.Send(new GetUserQueryRequest()
        {
            UserId = id
        });
        if (user is null) return NotFound();

        await _mediator.Send(new DeleteUserCommandRequest()
        {
            User = user
        });
        
        return NoContent();
    }
}