import { default as path } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import UnheadVite from "@unhead/addons/vite";
import { default as react } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), UnheadVite()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
