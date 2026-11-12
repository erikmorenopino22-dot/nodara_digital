/**
 * Cinta de texto en movimiento continuo. La lista se pinta dos veces para que
 * el bucle no tenga corte; la copia se oculta a los lectores de pantalla.
 * Se detiene al pasar el ratón y con "reducir movimiento" (ver index.css).
 */
export default function Marquee({ items, label }) {
  return (
    <div className="marquee overflow-hidden" role="group" aria-label={label}>
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 ? 'true' : undefined} className="flex shrink-0">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-8 pr-8 font-display text-2xl tracking-tight text-white/85 sm:gap-12 sm:pr-12 sm:text-3xl"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-ice" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
