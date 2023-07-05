FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["ProjectTemplate.API/ProjectTemplate.API.csproj", "ProjectTemplate.API/"]
RUN dotnet restore "ProjectTemplate.API/ProjectTemplate.API.csproj"
COPY . .
WORKDIR "/src/ProjectTemplate.API"
RUN dotnet build "ProjectTemplate.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ProjectTemplate.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProjectTemplate.API.dll"]
