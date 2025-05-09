# React Essential

React Essential - An Essential Template to get started with React.js application with all the essentials included...

## Features

- ✨ Library: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) - Fast and efficient development environment
- 🚀 Styling: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 💻 Language: [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- 🧹 Linting and Formatting: [Biome.js](https://biomejs.dev/) - Fast and customizable linter and formatter
- 🎨 Themes: [next-themes](https://github.com/pacocoursey/next-themes) - Easy theming for React.js.
- 💄 Icons: [lucide-react](https://lucide.dev/) - A comprehensive set of icons for React.js
- ⚙️ Build: Github Actions - Automated workflows for CI/CD
- 🛠 Commit: [Husky](https://typicode.github.io/husky/) - Git hooks made easy
- 📦 Package: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- 🚀 Routing: [TanStack Router](https://tanstack.com/router/v1) - Type-safe routing for React

## Project Structure

- `src/`: Source code directory
  - `/routes`: Contains all routes and pages
  - `/components`: Contains reusable, presentational components that can be shared across different parts of the application.
  - `/primitives`: Contains basic UI elements or primitive components such as buttons, inputs, etc., that are used in building more complex components.
  - `/hooks`: Contains custom React hooks for specific logic or functionality that can be reused across the app.
  - `/interfaces`: Contains TypeScript interfaces that define types for the app's data models or API responses.
  - `/lib`: Includes helper functions, utilities, and configuration files like API clients, authentication methods, etc.
  - `/providers`: Contains context providers for managing global state across the application.
  - `/styles`: Global styles and theme configuration
- `public/`: Static assets and images

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Guidelines

- Keep reusable components in the components/ folder
- Place primitive components like buttons, inputs, etc., in the primitives/ folder
- Store hooks in the hooks/ folder to make them easily reusable
- Define all interfaces in the interfaces/ folder
- Store helpers, utilities, and configurations in the lib/ folder
- Use context and global state management with the providers/ folder
- Follow the TypeScript and Biome.js linting rules
- Use Husky pre-commit hooks to ensure code quality

## Customization

- Modify the theme in `tailwind.config.ts`
- Adjust global styles in `src/styles/root-layout.css`
- Configure Vite settings in `vite.config.ts`

## Available Scripts

- `pnpm run dev`: Start the development server
- `pnpm run build`: Build the production-ready application
- `pnpm run typecheck`: Run TypeScript type checking
- `pnpm run lint`: Run Biome.js linter
- `pnpm run lint:fix`: Run Biome.js linter and fix issues
- `pnpm run format`: Format code using Biome.js

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.
