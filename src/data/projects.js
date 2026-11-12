// Proyectos del portfolio. Los textos están en translations/ (work.items.<id>).
//
// Para añadir un proyecto real:
//   1. Añade aquí un objeto con type: 'client' y, si existe, su url pública.
//   2. Añade sus textos en es.js y en.js dentro de work.items.<id>.
//   3. Opcional: indica `image` (ruta a una captura en /public) en lugar de `cover`.
//
// type: 'concept' → muestra la etiqueta "Concepto propio".
// type: 'client'  → no muestra etiqueta y, si hay url, enlaza al proyecto.
export const PROJECTS = [
  { id: 'consulting', type: 'concept', cover: 'web', url: null, image: null },
  { id: 'booking', type: 'concept', cover: 'software', url: null, image: null },
  { id: 'automation', type: 'concept', cover: 'ai', url: null, image: null },
]
