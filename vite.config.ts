import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gray-matter requires Node.js polyfills
    nodePolyfills(),
    tsconfigPaths(),
  ],
  assetsInclude: ["content/**/*.md"],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
