import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Shortcut for paths
    },
  },
  build: {
    rollupOptions: {
      external: ["path"], // Externalize Node.js modules like 'path'
    },
  },
});
