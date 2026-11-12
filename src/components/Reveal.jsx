import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1]
const VIEWPORT = { once: true, margin: '0px 0px -80px 0px' }

/**
 * Aparición suave de un bloque la primera vez que entra en pantalla.
 */
export default function Reveal({ as = 'div', delay = 0, className, children }) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </Component>
  )
}

const groupVariants = {
  hidden: {},
  visible: (stagger) => ({ transition: { staggerChildren: stagger } }),
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

/**
 * Contenedor cuyos <RevealItem> aparecen uno tras otro (en cascada).
 * `stagger` es el retraso en segundos entre un elemento y el siguiente.
 */
export function RevealGroup({ as = 'div', stagger = 0.1, className, children }) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      variants={groupVariants}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </Component>
  )
}

export function RevealItem({ as = 'div', className, children }) {
  const Component = motion[as]
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  )
}
