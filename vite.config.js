import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure this points to the correct base path for your app
  build: {
    outDir: "dist", // Default output directory
  },
  server: {
    open: true, // Opens the app in the browser when you run `npm run dev`
  },
});
