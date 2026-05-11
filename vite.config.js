import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/companies": "http://localhost:3000",
      "/jobs": "http://localhost:3000",
      "/tech": "http://localhost:3000",
      "/testimonials": "http://localhost:3000",
      "/awards": "http://localhost:3000",
      "/projects": "http://localhost:3000",
      "/api-docs": "http://localhost:3000",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
