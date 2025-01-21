# TaskApp
TaskApp is a feature-rich task management application designed to facilitate seamless organization and productivity. 
It enables users to manage tasks with robust CRUD operations, intuitive navigation, and an elegant user interface. 
Built with a modern tech stack, the application emphasizes user experience and efficient performance.
    
## Table of Contents
* [General Information](#General-Information)
* [Features](#Features)
* [Tech Stack](#Tech-Stack)
* [API Endpoints](#API-Endpoints)

## Features
- **Task Management:** Create, view, update, and delete tasks.
- **User Authentication:** Secure user authentication using ASP.NET Core Identity and cookie-based login.
- **Account Management:** Users can register, log in, log out, and view their usernames.
- **Modern UI:** Responsive design using React, Bootstrap, and custom React components.
- **Dynamic Routing:** Implemented with React Router for smooth navigation.
- **Swagger API Documentation:** OpenAPI-compliant documentation for backend APIs.
- **Persistent Storage:** Data stored using Entity Framework Core and SQL Server.
- **Sticky Navbar:** Easy access to all sections with a responsive and collapsible navigation bar.

## Tech Stack
### Frontend

- **React.js**
    - `react-router-dom` for navigation.
    - Custom components for reusability and styling (e.g., `ContainerWrapper`, `CustomButton`, `CustomTable`).
- **CSS Framework:** Bootstrap (and Bootstrap Icons for UI elements).
- **Font:** Unique typography using [Poppins](https://fontsource.org/fonts/poppins).
- **State Management:** Leveraged React Hooks such as `useState` and `useEffect`.
  
### Backend
- **ASP.NET Core 8.0**
    - REST API design with ASP.NET controllers.
    - User authentication using cookies.
    - API secured with the `[Authorize]` attribute.
- **Database:**
    - Entity Framework Core (Code-First approach with migrations).
    - SQL Server as the database provider.
    - Associations between users and tasks.
- **Documentation:** Auto-generated Swagger documentation.

### Additional Tools
- **Build & Deployment:**
    - `.NET CLI` and `npm` for development.
    - Configuration for development and production builds.
- **Version Control:** Git.
