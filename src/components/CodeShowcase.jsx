import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'
import { Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { CODE_SAMPLES } from '../data/codeSamples.js'
import { highlight } from '../utils/highlight.js'

const TOKEN_CLASS = {
  plain: 'text-[#c9d5e0]',
  comment: 'text-slate italic',
  string: 'text-ice',
  tag: 'text-ice',
  keyword: 'text-mist',
  call: 'text-white',
}

const CHARS_PER_TICK = 3
const TICK_MS = 24
const HOLD_MS = 5200 // tiempo que se muestra el resultado antes de pasar al siguiente

/** Resultado de cada ejemplo: una interfaz, una respuesta de API o un registro. */
function Output({ id, demo }) {
  if (id === 'ui') {
    const slots = ['09:00', '10:30', '12:00', '16:30']
    return (
      <div>
        <p className="text-sm text-mist">{demo.pick}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {slots.map((slot, index) => (
            <motion.span
              key={slot}
              className="rounded-full border border-white/15 px-3 py-1.5 text-sm"
              initial={{ backgroundColor: 'rgba(167,216,255,0)', color: '#ffffff' }}
              animate={index === 2 ? { backgroundColor: 'rgba(167,216,255,1)', color: '#101820' } : {}}
              transition={{ delay: 0.9, duration: 0.3 }}
            >
              {slot}
            </motion.span>
          ))}
        </div>
        <motion.span
          className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-midnight"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.3 }}
        >
          {demo.confirm}
        </motion.span>
      </div>
    )
  }

  if (id === 'api') {
    return (
      <pre className="overflow-x-auto font-mono text-[0.8rem] leading-relaxed text-[#c9d5e0]">
        <span className="text-mist">POST /bookings</span>
        {'\n'}
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <span className="text-ice">201 Created</span>
          {'\n'}
          {'{ "id": "bk_1042", "slot": "12:00",\n  "status": "confirmed" }'}
        </motion.span>
      </pre>
    )
  }

  return (
    <ul className="space-y-2 text-sm">
      {demo.log.map((line, index) => (
        <motion.li
          key={line}
          className="flex items-center gap-2.5"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.55, duration: 0.3 }}
        >
          <Check className="h-4 w-4 shrink-0 text-ice" aria-hidden="true" />
          {line}
        </motion.li>
      ))}
    </ul>
  )
}

/**
 * Editor de código animado: escribe un ejemplo, muestra su resultado y pasa
 * al siguiente. Las pestañas se pueden pulsar; al hacerlo se detiene el
 * cambio automático. Con "reducir movimiento" el código aparece ya escrito.
 */
export default function CodeShowcase() {
  const { t } = useLanguage()
  const demo = t.engineering.demo
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4 })

  const [active, setActive] = useState(0)
  const [typed, setTyped] = useState(0)
  const [auto, setAuto] = useState(true)

  const sample = CODE_SAMPLES[active]
  const tokens = useMemo(() => highlight(sample.code), [sample])
  const total = sample.code.length
  const visibleChars = reduceMotion ? total : typed
  const done = visibleChars >= total

  // Escritura: avanza unos caracteres cada pocos milisegundos mientras se ve.
  useEffect(() => {
    if (reduceMotion || !inView || done) return
    const timer = setInterval(() => setTyped((count) => Math.min(count + CHARS_PER_TICK, total)), TICK_MS)
    return () => clearInterval(timer)
  }, [reduceMotion, inView, done, total])

  // Al terminar, espera y pasa al siguiente ejemplo.
  useEffect(() => {
    if (reduceMotion || !inView || !done || !auto) return
    const timer = setTimeout(() => select((active + 1) % CODE_SAMPLES.length), HOLD_MS)
    return () => clearTimeout(timer)
  }, [reduceMotion, inView, done, auto, active])

  function select(index) {
    setActive(index)
    setTyped(0)
  }

  // Pinta solo los caracteres ya "escritos".
  let budget = visibleChars
  const rendered = tokens.map((token, index) => {
    if (budget <= 0) return null
    const text = token.text.slice(0, budget)
    budget -= text.length
    return (
      <span key={index} className={TOKEN_CLASS[token.type]}>
        {text}
      </span>
    )
  })

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-white/10 bg-midnight-soft">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pr-4">
        <div role="tablist" aria-label={demo.label} className="flex">
          {CODE_SAMPLES.map((item, index) => {
            const selected = index === active
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`code-tab-${item.id}`}
                aria-selected={selected}
                aria-controls="code-panel"
                onClick={() => {
                  setAuto(false)
                  select(index)
                }}
                className={`relative min-h-12 px-4 text-sm transition-colors duration-200 sm:px-5 ${
                  selected ? 'text-white' : 'text-mist hover:text-white'
                }`}
              >
                {demo.tabs[item.id]}
                {selected && (
                  <motion.span layoutId="code-tab-line" className="absolute inset-x-0 -bottom-px h-px bg-ice" />
                )}
              </button>
            )
          })}
        </div>
        <span className="hidden font-mono text-xs text-slate sm:block">{sample.file}</span>
      </div>

      <div id="code-panel" role="tabpanel" aria-labelledby={`code-tab-${sample.id}`}>
        {/* El texto completo existe para lectores de pantalla; la versión animada es decorativa. */}
        <pre className="sr-only">{sample.code}</pre>
        <pre
          aria-hidden="true"
          className="h-[19rem] overflow-x-auto p-5 font-mono text-[0.8rem] leading-[1.75] sm:p-6 sm:text-[0.85rem]"
        >
          <code>
            {rendered}
            {!done && <span className="caret ml-px inline-block h-[1.1em] w-[2px] translate-y-[0.2em] bg-ice" />}
          </code>
        </pre>

        <div className="border-t border-white/10 bg-midnight/60 p-5 sm:p-6">
          <div className="flex items-center justify-between text-xs text-slate">
            <span>{demo.output[sample.id]}</span>
            <span>{demo.note}</span>
          </div>
          <div className="mt-4 h-28">
            <AnimatePresence mode="wait">
              {done && (
                <motion.div
                  key={sample.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Output id={sample.id} demo={demo} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
