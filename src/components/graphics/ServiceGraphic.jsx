// Ilustraciones esquemáticas de cada servicio, dibujadas en SVG (sin imágenes
// externas: pesan muy poco y se ven nítidas en cualquier pantalla).
// tone="light" para fondos claros, tone="dark" para fondos Midnight.
// Cada una tiene una animación breve al entrar en pantalla.

import { motion } from 'motion/react'

const VIEWPORT = { once: true, margin: '0px 0px -60px 0px' }

const TONES = {
  light: { line: '#c5d0da', soft: '#e6ebf0', surface: '#ffffff', strong: '#526273' },
  dark: {
    line: 'rgba(255,255,255,0.24)',
    soft: 'rgba(255,255,255,0.1)',
    surface: 'rgba(255,255,255,0.03)',
    strong: 'rgba(255,255,255,0.75)',
  },
}
const ICE = 'var(--color-ice)'
// Color de las señales en movimiento: azul claro sobre oscuro, azul intenso sobre claro.
const ICE_DEEP = { dark: 'var(--color-ice)', light: 'var(--color-ice-deep)' }

function WebGraphic({ c }) {
  return (
    <>
      <rect x="20" y="20" width="360" height="240" rx="12" fill={c.surface} stroke={c.line} strokeWidth="1.5" />
      <path d="M20 54h360" stroke={c.line} strokeWidth="1.5" />
      <circle cx="40" cy="37" r="4" fill={c.line} />
      <circle cx="54" cy="37" r="4" fill={c.line} />
      <circle cx="68" cy="37" r="4" fill={c.line} />
      <rect x="130" y="30" width="140" height="14" rx="7" fill={c.soft} />

      {[
        [82, 150],
        [104, 110],
      ].map(([y, width], i) => (
        <motion.rect
          key={y}
          x="44"
          y={y}
          height="14"
          rx="4"
          fill={c.strong}
          initial={{ width: 0 }}
          whileInView={{ width }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: 'easeOut' }}
        />
      ))}
      <rect x="44" y="132" width="130" height="6" rx="3" fill={c.line} />
      <rect x="44" y="144" width="100" height="6" rx="3" fill={c.line} />
      <rect x="44" y="166" width="72" height="22" rx="11" fill={ICE} />

      <rect x="222" y="78" width="134" height="110" rx="8" fill={c.soft} />
      <path d="m236 172 30-34 22 22 16-14 38 26" stroke={c.strong} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="330" cy="102" r="9" fill={ICE} />

      {[44, 152, 260].map((x, i) => (
        <motion.rect
          key={x}
          x={x}
          y="210"
          width="96"
          height="30"
          rx="6"
          stroke={c.line}
          strokeWidth="1.5"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
        />
      ))}
    </>
  )
}

function SoftwareGraphic({ c }) {
  const bars = [46, 70, 38, 92, 60, 78]
  return (
    <>
      <rect x="20" y="20" width="360" height="240" rx="12" fill={c.surface} stroke={c.line} strokeWidth="1.5" />
      <path d="M104 20v240" stroke={c.line} strokeWidth="1.5" />

      <rect x="38" y="42" width="48" height="8" rx="4" fill={c.strong} />
      <rect x="34" y="72" width="56" height="20" rx="6" fill={ICE} />
      <rect x="42" y="106" width="40" height="6" rx="3" fill={c.line} />
      <rect x="42" y="128" width="34" height="6" rx="3" fill={c.line} />
      <rect x="42" y="150" width="42" height="6" rx="3" fill={c.line} />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={124 + i * 82} y="40" width="70" height="44" rx="6" stroke={c.line} strokeWidth="1.5" />
          <rect x={134 + i * 82} y="52" width="26" height="5" rx="2.5" fill={c.line} />
          <rect x={134 + i * 82} y="64" width="40" height="9" rx="3" fill={c.strong} />
        </g>
      ))}

      <path d="M124 196h238" stroke={c.line} strokeWidth="1.5" />
      {bars.map((height, i) => (
        <motion.rect
          key={i}
          x={136 + i * 38}
          y={196 - height}
          width="22"
          height={height}
          rx="3"
          fill={i === 3 ? ICE : c.soft}
          stroke={i === 3 ? 'none' : c.line}
          strokeWidth="1.5"
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      <rect x="124" y="214" width="150" height="6" rx="3" fill={c.line} />
      <rect x="124" y="232" width="110" height="6" rx="3" fill={c.line} />
      <rect x="322" y="212" width="40" height="10" rx="5" fill={c.soft} />
      <rect x="322" y="230" width="40" height="10" rx="5" fill={c.soft} />
    </>
  )
}

function AiGraphic({ c }) {
  const inputs = [60, 140, 220]
  const outputs = [96, 184]
  return (
    <>
      {inputs.map((y) => (
        <path key={y} d={`M92 ${y} C150 ${y} 140 140 200 140`} stroke={c.line} strokeWidth="1.5" />
      ))}
      {outputs.map((y) => (
        <path key={y} d={`M200 140 C262 140 250 ${y} 308 ${y}`} stroke={c.line} strokeWidth="1.5" />
      ))}

      {/* Señales en movimiento sobre las mismas conexiones. */}
      {inputs.map((y, i) => (
        <path
          key={y}
          className="flow-line"
          style={{ animationDelay: `${i * -0.9}s` }}
          d={`M92 ${y} C150 ${y} 140 140 200 140`}
          stroke={ICE_DEEP[c === TONES.dark ? 'dark' : 'light']}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      {outputs.map((y, i) => (
        <path
          key={y}
          className="flow-line"
          style={{ animationDelay: `${-1.4 + i * -0.7}s` }}
          d={`M200 140 C262 140 250 ${y} 308 ${y}`}
          stroke={ICE_DEEP[c === TONES.dark ? 'dark' : 'light']}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}

      {inputs.map((y, i) => (
        <g key={y}>
          <rect x="28" y={y - 22} width="64" height="44" rx="8" fill={c.surface} stroke={c.line} strokeWidth="1.5" />
          <rect x="40" y={y - 9} width={i === 1 ? 28 : 36} height="6" rx="3" fill={c.strong} />
          <rect x="40" y={y + 4} width="24" height="5" rx="2.5" fill={c.line} />
        </g>
      ))}

      <circle className="spin-slow" cx="200" cy="140" r="44" stroke={c.line} strokeWidth="1.5" strokeDasharray="3 6" />
      <circle cx="200" cy="140" r="26" fill={ICE} />
      <path
        d="M200 126v28M186 140h28M190.5 130.5l19 19M209.5 130.5l-19 19"
        stroke="var(--color-midnight)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {outputs.map((y) => (
        <g key={y}>
          <rect x="308" y={y - 24} width="68" height="48" rx="8" fill={c.surface} stroke={c.line} strokeWidth="1.5" />
          <path
            d={`m322 ${y} 7 7 13-14`}
            stroke={c.strong}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="350" y={y - 3} width="16" height="6" rx="3" fill={c.line} />
        </g>
      ))}
    </>
  )
}

const GRAPHICS = { web: WebGraphic, software: SoftwareGraphic, ai: AiGraphic }

export default function ServiceGraphic({ type, tone = 'light', className }) {
  const Graphic = GRAPHICS[type]
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" aria-hidden="true">
      <Graphic c={TONES[tone]} />
    </svg>
  )
}
