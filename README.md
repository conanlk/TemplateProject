# TemplateProject
TemplateProject .NET - ReactJS

This project is monolithic project use .NET and follow Clean Architecture and CQRS.

To run project, follow step by step below:
    Migration database: 

        dotnet ef migrations add InitialCreate --project ProjectTemplate.API --context MigrationContext

        dotnet ef database update --project ProjectTemplate.API --context MigrationContext   

    Run Project
        dotnet run --project ProjectTemplate.API