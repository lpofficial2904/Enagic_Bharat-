import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

function spaFallback() {
  return {
    name: "spa-fallback",
    apply: "build",
    writeBundle(options) {
      const outputDirectory = resolve(options.dir ?? "dist");
      copyFileSync(
        resolve(outputDirectory, "index.html"),
        resolve(outputDirectory, "404.html"),
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  process.env.NODE_ENV ||= mode === "production" ? "production" : "development";

  return {
    plugins: [
      react(),
      tailwindcss(),
      spaFallback(),
    ],
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_API_BASE_URL || "http://localhost:5001",
          changeOrigin: true,
        },
      },
    },
  };
});
