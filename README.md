# Accounts balance viewer

Account balance viewer (ADRA) is an Account balance overview tool, that has been implemented for the Jondell Corp.

This repository contains the Frontend Angular project and .net core backend project in the same directory with different sub folders.

## Simple Intro

**Admin Users:** There are 2 navigation menus available for these users.

1.  Upload Balance - Users can upload any month's account balances in a csv format.
2.  Graph - Users can select a time period and generate the report based on the period.

**Normal Users:** There are only one menu for the normal users.

- View Balances - Users can view a straight forward balance overview of a selected month.

# Technologies Used

- _Frontend_ - Angular, Material UI, Angular Google Charts
- _Backend_ - .Net Core(5), Entity Framework Core, Fluent API, Automapper, Csv Helper, xUnit.

**Note:** Angular is developed using the subscriber pattern. Not used RxJs.

# Prerequisites

- `.NET 5.0`
- `node v16.14.0`
- `npm 8.3.1` prefered
- `ng 13.2.3` prefered
- `dotnet ef tool v5.0.16`

# How to run it locally?

## Backend

- Open CMD
- Navigate to the path - `'<root-directory>\99x\Adra-BE\Adra.Data'`
- Run the command - `dotnet ef --startup-project ../Adra.Api/ database update`
- Navigate back to the path - `'<root-directory>\99x\Adra-BE\Adra.Api'`
- Run the command - `dotnet run`
- Now the API is up and running in the link - `https://localhost:5001`
- To run the unit tests, navigate to the folder - `'<root-directory>\99x\Adra-BE'` and run the command - `dotnet test`

_Note: Only one controller covered by the complete unit tests is `ReportControllerTest.cs`_

## Frontend

- Open CMD
- Navigate to the path - `'<root-directory>\99x\Adra-FE'`
- Run the command - `ng serve -o`
- Now the UI will be opened in your default browser with the link.
- To run the unit tests, in the same directory run the command - `ng test`

_Note: Only one component completely covered by the frontend unit tests is `year-month-picker.component.spec.ts`_

# Live App & User Credentials

### You can now explore the production live application from the below links.

- UI - https://adra-ui.herokuapp.com
- API - https://adra-api.herokuapp.com

_Note - There are no loading indicators configured while api calls. So please wait for a while to complete the endpoint http calls._

### Administrator

- username - `admin`
- password - `admin123`

### Normal User

- username - `user`
- password - `user123`
