import { defineConfig } from "vite";
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

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaFallback(),
  ],
});
