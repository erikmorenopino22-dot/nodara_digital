import { formEndpoint } from '../config/site.js'

/**
 * Envía el formulario al servicio configurado en VITE_FORM_ENDPOINT.
 *
 * Devuelve uno de estos estados:
 *   'unconfigured' → no hay endpoint: NO se ha enviado nada.
 *   'success'      → el servicio ha confirmado la recepción.
 *   'error'        → el envío ha fallado.
 *
 * El cuerpo es JSON, formato que aceptan servicios como Formspree o una
 * API propia. Para otro servicio, adapta únicamente esta función.
 */
export async function submitContact(payload) {
  if (!formEndpoint) return 'unconfigured'

  try {
    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    return response.ok ? 'success' : 'error'
  } catch {
    return 'error'
  }
}
