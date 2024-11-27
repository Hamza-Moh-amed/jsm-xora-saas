import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import Checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    [react()],
    Checker({
      typescript: false, // Disable TypeScript checker
      eslint: {
        lintCommand: "eslint .", // Disable or ignore lint errors
      },
    }),
  ],
});
