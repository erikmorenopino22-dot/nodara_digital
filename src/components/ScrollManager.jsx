import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/** Quita el prefijo de idioma: "/es/aviso-legal/" → "aviso-legal". */
function pageKey(pathname) {
  return pathname.split('/').filter(Boolean).slice(1).join('/')
}

/**
 * React Router no gestiona el scroll por sí solo. Este componente:
 * - sube al inicio al cambiar de página;
 * - se desplaza a la sección indicada cuando la URL lleva un ancla (#contact);
 * - no mueve nada si solo cambia el idioma, para no perder el punto de lectura.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const previous = useRef(null)

  useEffect(() => {
    const current = { page: pageKey(pathname), lang: pathname.split('/')[1], hash }
    const last = previous.current
    previous.current = current

    const onlyLangChanged = last && last.lang !== current.lang && last.page === current.page
    if (onlyLangChanged) return

    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
    // `key` cambia en cada navegación: permite volver a una sección
    // aunque la URL ya tuviera esa misma ancla.
  }, [pathname, hash, key])

  return null
}
