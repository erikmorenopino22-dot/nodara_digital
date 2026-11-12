import { Link } from 'react-router-dom'

const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const SIZES = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-13 px-7 text-base',
}

const VARIANTS = {
  // Acción principal sobre fondos oscuros.
  primary: 'bg-ice text-midnight hover:bg-white',
  // Acción principal sobre fondos claros.
  dark: 'bg-midnight text-white hover:bg-slate',
  // Acción secundaria sobre fondos oscuros.
  outline: 'border border-white/25 text-white hover:border-white hover:bg-white/5',
  // Acción secundaria sobre fondos claros.
  'outline-dark': 'border border-midnight/20 text-midnight hover:border-midnight',
}

/**
 * Botón reutilizable. Según las props se renderiza como:
 * - <Link> de React Router si recibe `to` (navegación interna);
 * - <a> si recibe `href` (enlace externo);
 * - <button> en el resto de casos.
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  children,
  ...props
}) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`
  const content = (
    <>
      {children}
      {Icon && (
        <Icon
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
