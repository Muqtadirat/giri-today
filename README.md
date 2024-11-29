# WeShop - E-commerce Store

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Scripts](#scripts)
- [Architecture Decisions](#architecture-decisions)
- [Performance Optimization](#performance-optimization)
- [Areas for Improvement](#areas-for-improvement)
- [Scoping](#scoping)
- [Live Demo](#live-demo)
- [Technologies](#technologies)

## Getting Started

To get started with the project, follow the steps below.

## Prerequisites

Ensure you have the following installed on your development machine:

- Node.js (version 20.x.x recommended)
- Yarn (version 4.x.x recommended)

## Project Setup

1. **Clone the Repository**:

   ```bash
    git clone https://github.com/Muqtadirat/giri-today.git
   ```

2. **Install Dependencies**:

   ```
   yarn install
   ```

3. **Run the Development Server** :

   ```
   yarn dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Scripts

The project includes the following scripts:

- **`dev`**: Runs the development server
- **`build`**: Builds the application in the for production.
- **`prettier`**: Formats the codebase using Prettier.
- **`lint`**: Runs linting on application

## Architecture Decisions

This section covers the key architectural decisions made during the development of this project:

### 1. **Folder Structure**

The project is organized into several main directories to ensure scalability and maintainability:

- **`/app`**: This directory contains the main application logic, including the `pages` folder for Next.js routing and `Components` for reusable UI elements.
  - **`/Components`**: Contains subdirectories for modular, isolated components like buttons, inputs, layouts, product-related components, and others. Each subdirectory has an `index.ts` file to simplify imports and make the component structure easier to manage.
  - **`/(pages)`**: Contains the Next.js page components that handle routing. Each page corresponds to a route in the application.
- **`/assets`**: Stores static assets such as images, icons, and fonts, which are referenced throughout the app. This includes TypeScript files (`assets.ts`, `fonts.ts`) that provide structured access to these assets.
- **`/context`**: Contains React Context providers used for managing global state in a simpler and more lightweight manner compared to Redux. This folder provides a centralized place for managing shared state.

- **`/hooks`**: Custom React hooks are stored here to promote reusability and separation of concerns. This allows easy extraction of logic and improves code maintainability.

- **`/redux`**: Contains Redux-related files, including slices for managing global state. This is used for more complex state management that requires global accessibility or interactions between multiple components.

- **`/services`**: Handles API calls and interactions with external services, such as fetching data using Axios or managing requests to a backend server.

- **`/utils`**: Stores helper functions, conversions, and utility files that contain reusable logic and are used throughout the application. It contains an `index.ts` file to simplify access to commonly used functions.

### 2. **Component Structure**

Each component is broken down into smaller, reusable units with a clear purpose. Components are categorized into:

- **UI components** (buttons, inputs, loaders, etc.): Located in the `Components` directory.
- **Page components**: Located in the `pages` directory, these are tied to specific routes in the app.

By organizing components this way, it ensures that the app is easy to extend and maintain as new features are added.

### 3. **State Management**

We use **Redux Toolkit** for global state management, especially for more complex states that need to be shared across multiple components. Redux is used alongside **React Context** for more lightweight, component-specific state management. For data fetching and caching, **React Query** is employed to handle asynchronous operations efficiently.

### 4. **Routing and Pages**

The Next.js **file-based routing** system is used. Each file inside the `pages` folder corresponds to a route in the application. Dynamic routes are implemented using file names that include brackets (e.g., `[id].tsx`). This ensures a simple and intuitive routing mechanism that fits well with the nature of the app.

### 5. **Styling and Design System**

The application uses **Tailwind CSS**, a utility-first CSS framework that allows for rapid styling without leaving HTML. This approach minimizes the need for writing custom CSS and encourages the use of reusable classes. The project also utilizes **PostCSS** to process styles.

### 6. **API Requests and Data Fetching**

API calls are handled by **Axios**, with services defined in the `/services` folder to centralize and streamline API interactions. For data fetching, caching, and synchronization, **React Query** is utilized, which simplifies managing server-state and ensures better user experience by providing features like automatic caching and background updates.

### 7. **Code Formatting and Linting**

**Prettier** is used for consistent code formatting, and **ESLint** is integrated to enforce code quality and best practices. Both tools are configured to run automatically to ensure a high level of code quality across the project.

## Performance Optimization

- **Infinite Scrolling**: Implemented load more functionality for products to improve load times and user experience.
- ** Skeletons**: Added loading placeholders for different compoennts such as product cards when loading/fetching data.
- **Product Filtration**: Added filtering of products based on categories and subcategories to improve navigation and reduce clutter.


## Areas for Improvement

While the project is functional, there are several areas that could benefit from further optimization and refinement. Below are some key areas for improvement:

### 1. **Mock Data vs. Backend Integration**

Currently, the project uses mock data to simulate backend responses. This mock data does not fully replicate the behavior and structure of real backend data, which can lead to inconsistencies when the application is eventually integrated with a real backend. I had envisioned using Postman to handle product filtration by different categories on the server side, which would make the frontend code cleaner and more manageable. However, I encountered difficulties in setting up pagination via Postman and could not get it to work as intended. As a result, pagination was handled on the frontend, which can become less efficient as the application scales.


### 2. **Pagination Logic**

The pagination logic, while functional, could be optimized further for better performance. Currently, it handles pagination on the frontend, which can lead to inefficiencies with large data sets. Offloading pagination to the backend could result in faster performance and reduced client-side processing, especially as the product catalog grows.


### 3. **UI/UX Enhancements**

- The cart and checkout flows could be made more intuitive by improving the design and providing more visual feedback on user actions.
- The product detail pages could benefit from better image galleries, reviews, and more interactive features.

### 4. **Testing**

- Unit tests for utility functions and components.
- Integration tests to ensure the frontend and backend interact correctly.

## Scoping

### Features Implemented

- **Responsive Product Listing**: Displayed 20+ products with responsive design.
- **Shopping Cart**: Added add/remove functionality to the cart.
- **Filtering**: Implemented filtering by category and subcategory.
- **State Management**: Used Redux for global state.
- **Reusable Components**: Created components with prop typing.
- **Rendering Optimization**: Used server-side and client-side rendering where needed.
- **Infinite Scroll**: Implemented infinite scroll.
- **Code Splitting**: Demonstrated code splitting.
- **Skeleton States**: Added skeleton loading states.
- **Meta Tags**: Implemented SEO meta tags.
- **Structured Data**: Added product structured data.
- **Semantic HTML**: Ensured proper semantic HTML.
- **Accessibility**: Enabled ARIA labels.
- **Mock Data**: Mocked product data wvia Postman Api.
- **Error Handling**: Included API error handling and UI components for user.

### Features Not Implemented

- **Unit Testing**: Due to time constraints and my ongoing learning process with Jest, unit testing has not yet been fully implemented.



## Technologies

The project uses the following technologies:

- **Next.js**: A React framework for server-side rendering (SSR) and static site generation (SSG)
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Type-safe version of JavaScript
- **Redux Toolkit**: A library for managing the application state with a simplified and more efficient approach
- **React Query**: A library for data fetching, caching, and synchronization in React applications
- **Axios**: HTTP client for making API requests
- **Framer Motion**: Animation library for React that powers smooth transitions and animations
- **Tailwind CSS**: Utility-first CSS framework for fast UI development
- **PostCSS**: CSS tool for processing styles
- **Prettier**: Code formatter for consistent style
- **ESLint**: Linter for identifying and fixing issues in JavaScript and TypeScript code
- **clsx**: Utility for constructing `className` strings conditionally
- **dotenv**: Module for loading environment variables from `.env` files
- **react-redux**: Official React bindings for Redux
- **@tanstack/react-query-devtools**: Developer tools for React Query
- **@types/node**: TypeScript definitions for Node.js
- **@types/react**: TypeScript definitions for React
- **@types/react-dom**: TypeScript definitions for ReactDOM
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript support
- **@typescript-eslint/parser**: ESLint parser for TypeScript
- **eslint-plugin-import**: ESLint plugin for managing import/export syntax
- **eslint-plugin-prettier**: ESLint plugin for Prettier integration
- **eslint-plugin-react-hooks**: ESLint plugin for React Hooks rules
- **eslint-plugin-simple-import-sort**: ESLint plugin for sorting imports
- **prettier-plugin-tailwindcss**: Prettier plugin for sorting Tailwind CSS classes
- **yarn**: A package manager for managing dependencies and scripts

## Live Demo
[Watch the demo video](./src/assets//videos/demo.mp4)
