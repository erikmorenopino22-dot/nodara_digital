// Datos generales del sitio.
// Todo lo marcado como PENDIENTE debe completarse antes de publicar.

export const site = {
  name: 'Nodara Digital',

  // Dominio gratuito de Vercel (sin barra final). Cámbialo si conectas un dominio propio.
  // Se usa en canonical, hreflang, Open Graph, sitemap.xml y robots.txt.
  url: 'https://nodara-digital.vercel.app',

  // Correo de contacto público (footer, contacto y páginas legales).
  email: 'nodaradigital@gmail.com',

  defaultLang: 'es',
  languages: ['es', 'en'],
  ogImage: '/og-image.png',
}

// Endpoint del formulario de contacto (Formspree). Las solicitudes llegan
// al correo de la cuenta de Formspree. La variable VITE_FORM_ENDPOINT, si
// existe, tiene prioridad (ver .env.example). Esta URL no es secreta: el
// navegador del visitante siempre la ve al enviar el formulario.
export const formEndpoint = import.meta.env?.VITE_FORM_ENDPOINT || 'https://formspree.io/f/xyewzwde'
