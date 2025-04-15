import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import path from 'path';
import url from 'url';

const _dirname =
  typeof __dirname === 'undefined'
    ? path.dirname(url.fileURLToPath(import.meta.url))
    : __dirname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: "tsconfig.build.json",
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(_dirname, 'src/index.tsx'),
      name: "w3block-new-sdk",
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
