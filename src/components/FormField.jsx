import { CircleAlert } from 'lucide-react'

const CONTROL =
  'mt-2 block w-full rounded-lg border bg-white px-4 text-base text-midnight transition-colors duration-200 placeholder:text-slate/60 focus:border-midnight focus:outline-none focus:ring-2 focus:ring-ice'

/**
 * Campo de formulario accesible: etiqueta visible, mensaje de error asociado
 * con aria-describedby y estado aria-invalid.
 * `as` puede ser 'input', 'textarea' o 'select' (este último usa `options`).
 */
export default function FormField({
  as = 'input',
  id,
  label,
  hint,
  error,
  options,
  placeholder,
  className = '',
  ...props
}) {
  const Control = as
  const errorId = `${id}-error`
  const border = error ? 'border-red-700' : 'border-line hover:border-slate/60'

  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline justify-between gap-3 text-sm font-medium">
        {label}
        {hint && <span className="text-xs font-normal text-slate">{hint}</span>}
      </label>

      {as === 'select' ? (
        <select
          id={id}
          name={id}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${CONTROL} ${border} h-12 ${props.value ? '' : 'text-slate/70'}`}
          {...props}
        >
          <option value="">{placeholder}</option>
          {Object.entries(options).map(([value, text]) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      ) : (
        <Control
          id={id}
          name={id}
          placeholder={placeholder}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${CONTROL} ${border} ${as === 'textarea' ? 'min-h-36 resize-y py-3' : 'h-12'}`}
          {...props}
        />
      )}

      {error && (
        <p id={errorId} className="mt-2 flex items-start gap-1.5 text-sm text-red-700">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
