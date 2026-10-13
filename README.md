# Kaiyō · Menú de sushi

Menú digital visual de sushi, sashimi, postres y bebidas.

**Sitio publicado:** https://lucasfelice10.github.io/Sushi-Kaiyo/

Hecho con TanStack Start (modo SPA), React, TypeScript y Tailwind CSS.
El contenido del menú se edita en `src/config/restaurantConfig.ts`.

## Desarrollo

```sh
bun install
bun run dev
```

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila el sitio
estático y lo publica en GitHub Pages (en Settings → Pages la fuente debe ser
**GitHub Actions**). El `404.html` es copia del `index.html` para que cualquier
ruta cargue la SPA.
