import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import fbteePreset from "@nkzw/babel-preset-fbtee";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
    }),
    viteReact({
      babel: {
        presets: [fbteePreset],
        plugins: [],
      },
    }),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
