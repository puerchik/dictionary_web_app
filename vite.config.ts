import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
  base: "/dictionary-web-app/",
  resolve: {
    alias: {
      app: "/src/app",
    },
  },
  server: {
    port: 3000,
  },
});
