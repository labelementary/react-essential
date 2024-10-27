import { resolve } from "node:path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { default as react } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
