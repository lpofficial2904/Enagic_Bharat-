import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

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

function contactApiDev() {
  return {
    name: "contact-api-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (request, response) => {
        if (request.method !== "POST") {
          response.statusCode = 405;
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({ success: false, message: "Method Not Allowed" }));
          return;
        }

        try {
          const chunks = [];
          for await (const chunk of request) chunks.push(chunk);
          const rawBody = Buffer.concat(chunks).toString("utf8");
          const body = rawBody ? JSON.parse(rawBody) : {};
          const contactApiUrl = pathToFileURL(resolve(process.cwd(), "api/contact.js")).href;
          const { default: handler } = await import(`${contactApiUrl}?time=${Date.now()}`);

          await handler(
            { method: request.method, body },
            {
              setHeader: response.setHeader.bind(response),
              status(code) {
                response.statusCode = code;
                return this;
              },
              json(payload) {
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify(payload));
              },
            },
          );
        } catch (error) {
          console.error("Local contact API failed:", error);
          response.statusCode = 500;
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({ success: false, message: "Local contact API failed" }));
        }
      });
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
      contactApiDev(),
      spaFallback(),
    ],
  };
});
