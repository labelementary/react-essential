import {
  type AnyRouter,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "@/styles/root-layout.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { UnheadProvider, createHead } from "@unhead/react/client";
import { routeTree } from "./routeTree.gen";

export const head: ReturnType<typeof createHead> = createHead();

const router = createRouter({ routeTree }) as AnyRouter;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={"system"} storageKey={"vite-ui-theme"}>
      <UnheadProvider head={head}>
        <RouterProvider router={router} />
      </UnheadProvider>
    </ThemeProvider>
  </React.StrictMode>
);
