import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import macros from "unplugin-parcel-macros";

export default defineConfig(({ mode }) => ({
  plugins: [
    macros.vite(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    // Don't empty dist folder in development mode (watch)
    emptyOutDir: mode !== "development",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "UI",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
}));
