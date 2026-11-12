import { Globe, LayoutDashboard, Workflow } from 'lucide-react'

// Datos no traducibles de cada servicio. Los textos están en translations/.
// `formValue` es el valor que se preselecciona en el formulario de contacto.
export const SERVICES = [
  { id: 'web', anchor: 'service-web', icon: Globe, formValue: 'web' },
  { id: 'software', anchor: 'service-software', icon: LayoutDashboard, formValue: 'software' },
  { id: 'ai', anchor: 'service-ai', icon: Workflow, formValue: 'ai' },
]
