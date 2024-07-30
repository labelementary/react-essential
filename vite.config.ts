import { defineConfig } from "vite";
import { default as react } from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
