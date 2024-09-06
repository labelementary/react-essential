import {
  type AnyRouter,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/root-layout.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree }) as AnyRouter;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
