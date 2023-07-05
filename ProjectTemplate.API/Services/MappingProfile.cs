using AutoMapper;
using ProjectTemplate.API.Models.Authentication;
using ProjectTemplate.API.Models.User;
using ProjectTemplate.Application.Modules.Users.Commands.CreateUser;
using ProjectTemplate.Application.Modules.Users.Commands.UpdateUser;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.API.Services;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // Mapping User
        CreateMap<User, UserResponse>().ForMember(dest=>dest.Roles, source => source.MapFrom(p=> p.UserRoles.Select(pp=>pp.Role)));
        CreateMap<User, SearchUserResponse>().ForMember(dest=>dest.Roles, source=>source.MapFrom((p=>p.UserRoles.Select(pp=>pp.Role))));
        CreateMap<User, LoginResponse>();
        CreateMap<AddUserRequest, CreateUserCommandRequest>();
        CreateMap<UpdateUserRequest, UpdateUserCommandRequest>();

    }
}
