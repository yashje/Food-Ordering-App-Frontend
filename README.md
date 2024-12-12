# Food-Ordering-App-Frontend

This project is a frontend web application built with modern tools and libraries like React, Tailwind CSS, and Vite, designed to interface with a food ordering backend system.

## Deployed Version
The project is deployed and can be accessed here-[https://food-ordering-app-frontend-1oly.onrender.com](https://food-ordering-app-frontend-1oly.onrender.com). Clicking this link will copy it to your clipboard.

---

## Prerequisites

Before starting, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone [<repository-url>](https://github.com/yashje/Food-Ordering-App-frontend)
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   This command starts the Vite development server and serves the frontend on a local port.

4. **Building the project**:
   To build the project for production, run:
   ```bash
   npm run build
   ```
   The compiled files will be in the `dist` directory.

5. **Preview the production build**:
   You can preview the production build locally:
   ```bash
   npm run preview
   ```

---

## Scripts

### `npm run dev`
- Starts the development server with Vite.

### `npm run build`
- Builds the project for production.

### `npm run preview`
- Previews the production build locally.

### `npm run lint`
- Runs ESLint to lint the TypeScript and React code.

---

## Dependencies

### Core Dependencies:
- `react`: Library for building user interfaces.
- `react-dom`: For rendering React components.
- `react-router-dom`: For managing routes and navigation.
- `tailwindcss`: Utility-first CSS framework.
- `zod`: For schema validation.
- `@auth0/auth0-react`: For handling authentication.

### Dev Dependencies:
- `vite`: Build tool for modern web applications.
- `typescript`: TypeScript language support.
- `eslint`: Linting tool for JavaScript and TypeScript.
- `postcss`: For processing CSS files.

---

## Additional Notes

- **Tailwind CSS**:
  Ensure Tailwind CSS is properly configured in `tailwind.config.js` to customize your styles.

- **TypeScript**:
  Ensure TypeScript is installed globally to avoid errors during builds.
  ```bash
  npm install -g typescript
  
