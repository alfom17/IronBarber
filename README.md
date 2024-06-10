# IronBarber

## [See the App!](https://ironbarber.netlify.app)

![App Logo](your-image-logo-path-or-name)

## Description

**NOTE -** Describe your project in one/two lines.

#### [Client Repo here](https://github.com/alfom17/IronBarber)

#### [Server Repo here](https://github.com/alfom17/IronBarberServer)

## Backlog Functionalities

**NOTE -**
A reactive calendar and a better CSS

## Technologies used

**NOTE -**
Frontend: HTML, CSS, javascript, React, react router dom, react context, axios.

# Client Structure

## User Stories

**NOTE -** List here all the actions a user can do in the app. Example:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **Error** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **signup** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **date create** - As a user I want to create a date
- **date list** - As a user I want to see all the dates I have made
- **date state** - As a user I want to see in which state my dates are
- **profile pic** - As a user I want to change my prifile pic

## Admin Stories

**NOTE -** List here all the actions an admin can do in the app. Example:

- **date state** - As an admin I want to change the satus of the dates
- **add services** - As an admin I want to change add new services to the dates
- **delete services** - As an admin I want to delete services of the dates




## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)

| Path            | Page        | Components | Permissions               | Behavior                                                     |
| --------------- | ----------- | ---------- | ------------------------- | ------------------------------------------------------------ |
| `/`             | HomePage    | Caruosels  | public                    | Home page                                                    |
| `/login`        | LoginPage   |            | public                    | Login form, link to signup, navigate to homepage after login |
| `/signup`       | SignupPage  |            | user only                 | Signup form, link to login, navigate to user after signup    |
| `/user`         | ProfilePage |            | user only `<OnlyPrivate>` | Navigate to homepage after logout                            |
| `/user-pic`     | ProfilePic  |            | user only `<OnlyPrivate>` | You can change The profilepic here                           |
| `/date`         | RevsionPage |            | admin only `<OnlyAdmin>`  | The admin can change the status of the date                  |
| `/service`      | ServicePage |            | admin only `<OnlyAdmin>`  | The admin can add services to the dates                      |
| `/service-list` | ServiceList |            | admin only `<OnlyAdmin>`  | The admin can delete the services here                       |
| `/date/:id`     | EditPage    |            | user only `<OnlyPrivate>` | The user can change their dates here                         |
| `/add-date`     | DatePage    |            | user only `<OnlyPrivate>` | The user can add dates here                                  |
| `/adminError`   | AdminError  |            | public                    | Shows the specific error page for each                       |
| `/errorPage`    | Error       |            | public                    | Shows the specific error page for each                       |
| `*`             | NotFound    |            | public                    | Shows the specific error page for each                       |

## Other Components

- Navbar
- Footer
- OnlyAdmin
- OnlyPrivate
- Caruosels

## Context

- auth.context

## Links

### Collaborators

[Alfonso](https://github.com/alfom17)

### Project

[Repository Link Client](https://github.com/alfom17/IronBarber)

[Repository Link Server](https://github.com/alfom17/IronBarberServer)

[Deploy Link](https://ironbarber.netlify.app)
