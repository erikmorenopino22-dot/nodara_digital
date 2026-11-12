// Validación del formulario de contacto.
// Devuelve un objeto { campo: claveDeError }. Si está vacío, todo es válido.
// Las claves se traducen en translations/ (contact.errors.<clave>).

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const MIN_MESSAGE_LENGTH = 20

export function validateContact(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'name'

  const email = values.email.trim()
  if (!email) errors.email = 'email'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'emailInvalid'

  if (!values.service) errors.service = 'service'
  if (!values.budget) errors.budget = 'budget'

  const message = values.message.trim()
  if (!message) errors.message = 'message'
  else if (message.length < MIN_MESSAGE_LENGTH) errors.message = 'messageShort'

  if (!values.consent) errors.consent = 'consent'

  return errors
}
