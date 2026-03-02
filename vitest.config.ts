import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import ts_paths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    ts_paths()
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest-setup.ts",
  }
})