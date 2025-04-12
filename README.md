# Money Tracker Frontend

This is a React-based frontend application for tracking financial data such as assets, expenditures, and incomes. The project is built using Vite for fast development and TailwindCSS for styling.

## Features

- **Assets Management**: Add, view, and manage your assets.
- **Expenditure Tracking**: Track your expenses with detailed descriptions.
- **Income Tracking**: Manage and view your income sources.
- **Responsive Design**: Fully responsive layout using TailwindCSS and DaisyUI.
- **Authentication**: Includes login and registration pages.
- **Dynamic Routing**: Uses React Router for navigation between pages.

## Project Structure

src/ ├── components/ # Reusable UI components (e.g., Navbar, Footer, Form, etc.)
├── pages/ # Page components for different routes (e.g., Assets, Expenditure, Home, etc.)
├── routes/ # Application routes configuration
├── store/ # Context and state management logic
├── App.css # Global styles
├── App.jsx # Main application component
├── main.jsx # Application entry point

# Technologies Used

React: Frontend library for building user interfaces.
Vite: Fast build tool for modern web projects.
TailwindCSS: Utility-first CSS framework for styling.
DaisyUI: TailwindCSS component library.
React Router: For routing and navigation.
Axios: For making HTTP requests.

Folder Details
Components

# Reusable components like:

Navbar
Footer
Form
ListItem
Pages

# Page components for routes:

Assets: Displays and manages assets.
Expenditure: Tracks expenses.
Home: Main dashboard layout.

# Routes

Routing is configured in routes.jsx using createBrowserRouter.

# Store

State management is handled in function.jsx using React Context.

# Styling

The project uses TailwindCSS for styling and DaisyUI for pre-designed components. Global styles are defined in App.css.
