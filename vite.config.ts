import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: "tsconfig.json",
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "W3BlockSDK",
      formats: ["es", "cjs"],
      fileName: (format) => `w3block-sdk.${format}.js`,
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
});
