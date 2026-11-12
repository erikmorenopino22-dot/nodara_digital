# Nodara Digital — web corporativa

Web bilingüe (ES / EN) desarrollada con React, Vite y Tailwind CSS.

## Cómo ejecutarla en tu ordenador

Necesitas **Node.js 22 LTS** (o 20.19+). Compruébalo con `node -v`; si no lo tienes, descárgalo en https://nodejs.org.

Abre una terminal en esta carpeta y ejecuta:

```bash
npm install      # instala las dependencias (solo la primera vez)
npm run dev      # servidor de desarrollo en http://localhost:5173
```

Otros comandos:

```bash
npm run build    # genera la versión de producción en dist/
npm run preview  # sirve dist/ en http://localhost:4173 para revisarla
```

## Tecnologías y versiones

| Paquete | Versión | Para qué |
| --- | --- | --- |
| react / react-dom | 19 | Interfaz por componentes |
| vite | 8 | Servidor de desarrollo y build |
| tailwindcss + @tailwindcss/vite | 4 | Estilos (el tema está en `src/index.css`) |
| react-router-dom | 7 | Rutas por idioma y páginas legales |
| motion | 14 | Animaciones (antes "Framer Motion") |
| lucide-react | 1 | Iconos |
| @fontsource-variable/* | 5 | Space Grotesk e Inter servidas desde el propio sitio |

## Estructura

```
index.html               Plantilla HTML (Vite inyecta aquí la app)
vite.config.js           Configuración de Vite (plugins de React y Tailwind)
vercel.json              Reglas de rutas para Vercel
scripts/postbuild.js     Tras el build: HTML por ruta con su SEO, sitemap y robots
public/                  Archivos estáticos (favicon, og-image, robots, _redirects)
src/
  main.jsx               Punto de entrada
  App.jsx                Rutas
  index.css              Tailwind + tema (colores, fuentes) + estilos base
  config/site.js         Datos del sitio (dominio, correo) → PENDIENTES
  translations/          es.js y en.js: TODOS los textos de la web
  context/               LanguageContext: idioma activo y textos
  hooks/useSeo.js        Título, descripción, canonical, hreflang, Open Graph
  utils/                 Rutas, SEO, validación y envío del formulario
  data/                  Servicios, proyectos, tecnologías y ejemplos de código
  components/            Piezas reutilizables (Header, Footer, Button, FormField…)
    graphics/            Ilustraciones SVG hechas en código
  sections/              Secciones de la página de inicio
  pages/                 Home, Legal (3 páginas legales) y NotFound
```

## Decisiones técnicas importantes

- **El idioma va en la URL** (`/es/`, `/en/`). Así se mantiene al navegar, cada idioma tiene su propia dirección para Google (etiquetas `hreflang`) y se puede compartir un enlace en un idioma concreto. La última elección se guarda en `localStorage` y la raíz `/` redirige a ella (español por defecto).
- **Traducciones centralizadas**: ningún componente contiene textos; todos leen de `src/translations/`. Para cambiar un texto, edita `es.js` y `en.js` (tienen la misma estructura).
- **SEO en una SPA**: una aplicación React genera un único `index.html`. Para que cada ruta tenga sus metadatos sin depender de JavaScript, `scripts/postbuild.js` crea un `index.html` por ruta e idioma, además de `sitemap.xml` y `robots.txt`.
- **Tailwind v4** no usa `tailwind.config.js`: los colores y fuentes de la marca se definen con `@theme` en `src/index.css` y generan clases como `bg-midnight` o `text-ice`.
- **Sin imágenes pesadas**: los gráficos son SVG escritos en código y las fuentes se sirven desde el propio sitio (sin Google Fonts, lo que además evita cookies y peticiones a terceros).
- **Accesibilidad**: HTML semántico, enlace "saltar al contenido", foco visible, formularios con errores asociados a cada campo y respeto de `prefers-reduced-motion`.

## Pendiente antes de publicar

1. **Dominio** → `src/config/site.js`, campo `url` (ahora `https://www.example.com`). Afecta a canonical, hreflang, Open Graph, sitemap y robots.
2. **Correo de contacto** → `src/config/site.js`, campo `email`. Mientras esté vacío no se muestra.
3. **Formulario** → ver el apartado siguiente.
4. **Tecnologías** → `src/data/stack.js`. Deja en la cinta solo las que uses de verdad.
5. **Textos legales** → `legalPages` en `src/translations/es.js` y `en.js`. Son un borrador: completa los datos marcados como `[PENDIENTE]` / `[PENDING]` (titular, NIF, domicilio, plazos, proveedores), haz que los revise un profesional y elimina después el aviso de borrador (`draftNotice` y su bloque en `src/pages/Legal.jsx`).

## Activar el formulario de contacto

El formulario valida los datos, pero **no envía nada** hasta que exista un servicio de envío: mientras tanto muestra el aviso "El formulario todavía no está conectado".

Opción gratuita sin backend (por ejemplo, Formspree):

1. Crea un formulario en el servicio y copia su URL.
2. Copia `.env.example` como `.env` y pega la URL en `VITE_FORM_ENDPOINT`.
3. Reinicia `npm run dev`. En el hosting, añade la misma variable de entorno y vuelve a desplegar.

El envío es un `POST` con JSON (`src/utils/submitContact.js`). Si usas otro servicio o una API propia, solo hay que adaptar esa función. Cuando lo actives, añade el proveedor a la política de privacidad.

## Publicarla gratis

Cualquiera de estos servicios tiene plan gratuito suficiente y HTTPS incluido. Los tres despliegan automáticamente desde un repositorio de GitHub.

**Vercel o Netlify**

1. Sube el proyecto a un repositorio de GitHub.
2. En vercel.com o netlify.com, "Add new project" → importa el repositorio.
3. Comando de build: `npm run build`. Carpeta de salida: `dist`.
4. Añade la variable `VITE_FORM_ENDPOINT` si ya tienes el formulario.

**Cloudflare Pages**: mismos pasos (build `npm run build`, salida `dist`).

El proyecto ya incluye `vercel.json` y `public/_redirects` para que las rutas funcionen al recargar la página. El único coste necesario es el dominio propio (unos 10-15 € al año), que se conecta desde el panel del hosting.

## Añadir un proyecto real al portfolio

1. Añade un objeto en `src/data/projects.js` con `type: 'client'`, su `url` y, si quieres, una captura en `image` (archivo dentro de `public/`).
2. Añade sus textos en `work.items.<id>` de `es.js` y `en.js`.
