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

**NOTE -**  List here all the actions a user can do in the app. Example:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **Error** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **signup** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **date create** - As a user I want to create a date
- **date list** - As a user I want to see all the dates I have made
- **date state** - As a user I want to see in which state my dates are


## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| ----------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Home            |                   | public                   | Home page                                                     |
| `/login`                  | Login           |                   | public                   | Login form, link to signup, navigate to homepage after login  |
| `/signup`                 | Signup          |                   | public                   | Signup form, link to login, navigate to homepage after signup |
| `/user`                   | Profile         |                   | user only `<IsPrivate>`  | Navigate to homepage after logout, expire session             |
| `/games/list`             | GameList        | AddGame, GameCard | user only `<IsPrivate>`  | Shows all films on backlog                                    |
| `/games/edit`             | GamesEdit       |                   | user only `<IsPrivate>`  | Shows all games on backlog                                    |
| `/games/favourites`       | FavouriteList   | GameCard          | user only `<IsPrivate>`  | Shows all games on backlog                                    |

## Other Components

- Navbar
- Footer
- OnlyAdmin
- OnlyPrivate

## Context

- auth.context

  
## Links

### Collaborators

[Alfonso](https://github.com/alfom17)


### Project

[Repository Link Client](https://github.com/alfom17/IronBarber)

[Repository Link Server](https://github.com/alfom17/IronBarberServer)

[Deploy Link](https://ironbarber.netlify.app)


