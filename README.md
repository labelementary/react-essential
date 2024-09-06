# Unified Starter - React Essential

Unified Starter - React Essential is a modern, feature-rich template for building React applications with all the essential configurations and tools pre-configured.

## Features

- ✨ Framework: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) - Fast and efficient development environment
- 🚀 Styling: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 💻 Language: [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- 🧹 Linting and Formatting: [Biome.js](https://biomejs.dev/) - Fast and customizable linter and formatter
- 🎨 Themes: [Theme Provider](src/lib/theme-provider.tsx) - Easy theme management
- 💄 Icons: [Radix-Icons](https://www.radix-ui.com/icons) - A crisp set of 15×15 icons
- 🎨 UI: [Shadcn UI](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- ⚙️ Build: Github Actions - Automated workflows for CI/CD
- 🛠 Commit: [Husky](https://typicode.github.io/husky/) - Git hooks made easy
- 📦 Package: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- 🚀 Routing: [TanStack Router](https://tanstack.com/router/v1) - Type-safe routing for React

## Project Structure

- `src/`: Source code directory
  - `routes/`: Contains all routes and pages
  - `ui/`: Contains all reusable components and primitives
  - `lib/`: Includes helpers, utilities, and configuration files
  - `styles/`: Global styles and theme configuration
- `public/`: Static assets and images

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Guidelines

- Keep components and primitives in the `src/ui/` folder
- Place all routes and pages in the `src/routes/` folder
- Store helpers, utilities, and configs in the `src/lib/` folder
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
- `pnpm run format`: Format code using Biome.js

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.