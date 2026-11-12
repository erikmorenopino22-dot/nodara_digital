import { motion, useReducedMotion } from 'motion/react'

// Gráfico del hero: una retícula de puntos sobre la que crece un camino
// de nodos conectados. El último nodo (azul) es "what's next".

const SIZE = 560
const CELLS = 8
const STEP = SIZE / CELLS
const at = (col, row) => [STEP / 2 + col * STEP, STEP / 2 + row * STEP]

const MAIN = [
  [2, 7],
  [3, 5],
  [5, 5],
  [5, 3],
  [6, 2],
  [7, 0],
].map(([c, r]) => at(c, r))

const BRANCHES = [
  [at(5, 5), at(7, 6)],
  [at(5, 3), at(3, 2)],
  [at(6, 2), at(7, 3)],
]

const toPath = (points) => points.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')

const DOTS = Array.from({ length: CELLS * CELLS }, (_, i) => at(i % CELLS, Math.floor(i / CELLS)))

export default function NodeField({ className }) {
  const [lastX, lastY] = MAIN[MAIN.length - 1]
  const drawDuration = 1.8
  const startDelay = 0.5
  const reduceMotion = useReducedMotion()

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} fill="none" aria-hidden="true">
      {DOTS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="var(--color-slate)" opacity="0.7" />
      ))}

      {BRANCHES.map((branch, i) => (
        <motion.path
          key={i}
          d={toPath(branch)}
          stroke="var(--color-slate)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: startDelay + drawDuration + i * 0.12 }}
        />
      ))}
      {BRANCHES.map(([, [x, y]], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="5"
          fill="var(--color-midnight)"
          stroke="var(--color-slate)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: startDelay + drawDuration + 0.5 + i * 0.12 }}
        />
      ))}

      <motion.path
        d={toPath(MAIN)}
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: drawDuration, delay: startDelay, ease: [0.65, 0, 0.35, 1] }}
      />

      {MAIN.slice(0, -1).map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="6"
          fill="var(--color-midnight)"
          stroke="#ffffff"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: startDelay + (drawDuration * i) / (MAIN.length - 1) }}
        />
      ))}

      {/* Una señal recorre el camino una y otra vez, de principio a fin. */}
      {!reduceMotion && (
        <circle r="4" fill="var(--color-ice)" opacity="0">
          <animateMotion
            dur="5s"
            begin={`${startDelay + drawDuration + 0.4}s`}
            repeatCount="indefinite"
            path={toPath(MAIN)}
            keyPoints="0;1;1"
            keyTimes="0;0.7;1"
            calcMode="linear"
          />
          <animate
            attributeName="opacity"
            dur="5s"
            begin={`${startDelay + drawDuration + 0.4}s`}
            repeatCount="indefinite"
            values="0;1;1;0;0"
            keyTimes="0;0.05;0.65;0.7;1"
          />
        </circle>
      )}

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: startDelay + drawDuration - 0.1 }}
      >
        <circle className="node-pulse" cx={lastX} cy={lastY} r="11" fill="var(--color-ice)" />
        <circle cx={lastX} cy={lastY} r="11" fill="var(--color-ice)" />
      </motion.g>
    </svg>
  )
}
