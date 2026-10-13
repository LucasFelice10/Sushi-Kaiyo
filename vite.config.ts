import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Sitio estático (SPA) publicado en GitHub Pages bajo /Sushi-Kaiyo/.
const base = process.env.GITHUB_PAGES === "true" ? "/Sushi-Kaiyo/" : "/";

export default defineConfig({
  base,
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      router: { basepath: base === "/" ? "/" : base.replace(/\/$/, "") },
      spa: { enabled: true, prerender: { outputPath: "/index", crawlLinks: false } },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
