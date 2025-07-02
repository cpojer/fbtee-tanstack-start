import fbteePreset from "@nkzw/babel-preset-fbtee";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      react: {
        babel: {
          presets: [fbteePreset],
          plugins: [],
        },
      },
    }),
  ],
});
