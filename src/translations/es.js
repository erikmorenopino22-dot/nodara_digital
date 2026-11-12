// Textos en español (idioma predeterminado).
// en.js debe tener exactamente la misma estructura de claves.

const PENDING = '[PENDIENTE]'

export default {
  meta: {
    home: {
      title: 'Nodara Digital — Desarrollo web, software a medida e IA',
      description:
        'Estudio tecnológico independiente. Diseñamos y desarrollamos páginas web, software a medida y automatizaciones con inteligencia artificial para empresas y profesionales.',
    },
    legal: {
      title: 'Aviso legal — Nodara Digital',
      description: 'Información legal sobre el titular y las condiciones de uso del sitio web de Nodara Digital.',
    },
    privacy: {
      title: 'Política de privacidad — Nodara Digital',
      description: 'Cómo trata Nodara Digital los datos personales que recibe a través de este sitio web.',
    },
    cookies: {
      title: 'Política de cookies — Nodara Digital',
      description: 'Qué almacenamiento utiliza el sitio web de Nodara Digital en tu navegador y para qué.',
    },
    notFound: {
      title: 'Página no encontrada — Nodara Digital',
      description: 'La página que buscas no existe o ha cambiado de dirección.',
    },
  },

  nav: {
    home: 'Inicio',
    services: 'Servicios',
    work: 'Proyectos',
    about: 'Nosotros',
    contact: 'Contacto',
    cta: 'Hablemos',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    main: 'Navegación principal',
    language: 'Idioma',
    skip: 'Saltar al contenido',
    languages: { es: 'Español', en: 'English' },
  },

  hero: {
    title: ['We build', 'what’s next.'],
    subtitle:
      'Diseñamos y desarrollamos soluciones digitales que ayudan a las empresas a evolucionar, automatizar y crecer.',
    primary: 'Descubre nuestros servicios',
    secondary: 'Inicia tu proyecto',
    servicesLabel: 'Qué hacemos',
  },

  intro: {
    title: 'La tecnología debe impulsar tu negocio, no complicarlo.',
    paragraphs: [
      'En Nodara Digital no partimos de una herramienta, sino de tu negocio: cómo trabajas, qué te quita tiempo y qué quieres conseguir. A partir de ahí desarrollamos la solución que encaja.',
      'A veces es una página web que explica bien lo que haces. Otras, una aplicación que ordena tu día a día o una automatización que elimina tareas repetitivas. En todos los casos buscamos lo mismo: que la tecnología trabaje para ti.',
    ],
    points: [
      {
        title: 'A tu medida',
        text: 'Cada proyecto se adapta a las necesidades y al tamaño de tu negocio.',
      },
      {
        title: 'Con un objetivo claro',
        text: 'Antes de escribir código definimos para qué sirve y cómo sabremos que funciona.',
      },
      {
        title: 'Sin tecnicismos',
        text: 'Te explicamos cada decisión con claridad para que siempre sepas qué estamos haciendo y por qué.',
      },
    ],
  },

  services: {
    title: 'Tres formas de hacer avanzar tu negocio.',
    lead: 'Puedes empezar por un solo servicio o combinarlos. Te ayudamos a decidir qué necesitas de verdad.',
    includes: 'Incluye',
    items: {
      web: {
        label: 'Web development',
        title: 'Desarrollo web',
        description: 'Diseñamos y desarrollamos páginas web modernas, rápidas y adaptadas a cada negocio.',
        includes: [
          'Webs corporativas',
          'Landing pages',
          'Diseño responsive',
          'Optimización SEO',
          'Formularios y conversiones',
        ],
        cta: 'Quiero una web',
      },
      software: {
        label: 'Custom software',
        title: 'Software a medida',
        description:
          'Desarrollamos aplicaciones y herramientas digitales adaptadas a los procesos de cada empresa.',
        includes: [
          'Aplicaciones web',
          'Paneles de administración',
          'Sistemas de reservas',
          'Gestión de clientes',
          'Plataformas personalizadas',
        ],
        cta: 'Necesito una aplicación',
      },
      ai: {
        label: 'AI & automation',
        title: 'IA y automatización',
        description:
          'Automatizamos tareas y conectamos herramientas para que las empresas trabajen de forma más eficiente.',
        includes: [
          'Automatización de procesos',
          'Integraciones mediante APIs',
          'Asistentes inteligentes',
          'Automatización de tareas administrativas',
          'Integración de inteligencia artificial',
        ],
        cta: 'Quiero automatizar procesos',
      },
    },
  },

  engineering: {
    title: 'Software bien hecho, por dentro y por fuera.',
    lead: 'Lo que se ve importa, y lo que no se ve también. Cuidamos la interfaz, la lógica y las conexiones entre sistemas con el mismo criterio.',
    practices: [
      {
        title: 'Código limpio y mantenible',
        text: 'Estructura clara y componentes reutilizables, para que ampliar el proyecto no obligue a rehacerlo.',
      },
      {
        title: 'Rendimiento desde el primer día',
        text: 'Páginas y aplicaciones ligeras, que cargan rápido en cualquier dispositivo y conexión.',
      },
      {
        title: 'Datos tratados con cuidado',
        text: 'Validamos cada dato que entra y protegemos la información de tus clientes.',
      },
      {
        title: 'Accesible y adaptable',
        text: 'Interfaces que funcionan con teclado, lector de pantalla y cualquier tamaño de pantalla.',
      },
    ],
    demo: {
      label: 'Ejemplos de código',
      note: 'Ejemplo ilustrativo',
      tabs: { ui: 'Interfaz', api: 'API', automation: 'Automatización' },
      output: { ui: 'Vista previa', api: 'Respuesta', automation: 'Registro' },
      pick: 'Elige una hora',
      confirm: 'Confirmar reserva',
      log: ['Solicitud recibida', 'Clasificada con IA: «web»', 'Contacto creado en el CRM', 'Equipo avisado'],
    },
    stack: 'Tecnologías con las que trabajamos',
  },

  process: {
    title: 'De la idea al resultado.',
    lead: 'Un proceso claro, con cinco etapas, para que sepas en todo momento en qué punto está tu proyecto.',
    steps: [
      { title: 'Descubrimiento', text: 'Analizamos tus necesidades y tus objetivos.' },
      { title: 'Estrategia', text: 'Definimos la solución tecnológica más adecuada.' },
      { title: 'Desarrollo', text: 'Diseñamos, programamos y construimos el proyecto.' },
      { title: 'Lanzamiento', text: 'Publicamos la solución y verificamos su funcionamiento.' },
      { title: 'Evolución', text: 'Ofrecemos soporte y mejoras para seguir creciendo.' },
    ],
  },

  work: {
    title: 'Proyectos de demostración.',
    lead: 'Estamos empezando, así que preferimos ser claros: estos tres proyectos son conceptos propios, creados para mostrar cómo trabajamos. No son encargos de clientes.',
    badge: 'Concepto propio',
    view: 'Ver proyecto',
    items: {
      consulting: {
        kind: 'Desarrollo web',
        title: 'Web corporativa para una consultora',
        description:
          'Un sitio claro y rápido que presenta servicios y equipo, pensado para que el visitante encuentre lo que busca y solicite una primera reunión.',
        tags: ['Web corporativa', 'Responsive', 'SEO'],
      },
      booking: {
        kind: 'Software a medida',
        title: 'Aplicación web de reservas y gestión',
        description:
          'Una herramienta para gestionar citas, disponibilidad y clientes desde un único panel, accesible desde el ordenador y el móvil.',
        tags: ['Aplicación web', 'Panel de gestión', 'Reservas'],
      },
      automation: {
        kind: 'IA y automatización',
        title: 'Automatización inteligente para una empresa',
        description:
          'Un flujo que recoge solicitudes, las clasifica con ayuda de IA y las envía a la herramienta adecuada, sin copiar y pegar a mano.',
        tags: ['Automatización', 'APIs', 'IA'],
      },
    },
    slot: {
      title: 'El siguiente puede ser el tuyo.',
      text: 'Este espacio está reservado para proyectos reales. Si tienes uno en mente, nos encantará escucharlo.',
      cta: 'Cuéntanos tu proyecto',
    },
  },

  about: {
    title: 'Construimos soluciones con propósito.',
    paragraphs: [
      'Nodara Digital es un estudio tecnológico independiente que acaba de empezar su camino. Nacemos con una idea sencilla: desarrollar soluciones digitales útiles, funcionales y bien diseñadas.',
      'Ser un estudio pequeño tiene ventajas. Hablas directamente con quien diseña y programa tu proyecto, las decisiones se toman rápido y cada trabajo recibe toda nuestra atención.',
      'No prometemos lo que no podemos cumplir. Preferimos proyectos bien definidos, plazos realistas y una comunicación clara de principio a fin.',
    ],
    values: [
      { title: 'Utilidad', text: 'Si no resuelve un problema real, no lo construimos.' },
      { title: 'Cuidado', text: 'El detalle importa, tanto en el diseño como en el código.' },
      { title: 'Honestidad', text: 'Te decimos lo que necesitas, aunque sea menos de lo que pedías.' },
      { title: 'Cercanía', text: 'Trato directo, sin intermediarios ni lenguaje complicado.' },
    ],
  },

  cta: {
    title: '¿Tienes una idea? Hagámosla realidad.',
    text: 'Cuéntanos qué necesitas y encontraremos la mejor solución tecnológica para tu negocio.',
    button: 'Empezar un proyecto',
  },

  contact: {
    title: 'Cuéntanos tu proyecto.',
    lead: 'Rellena el formulario con lo que tengas claro hasta ahora. No hace falta que esté todo definido: para eso está la primera conversación.',
    nextTitle: 'Qué pasa después',
    next: [
      'Leemos tu mensaje y revisamos lo que necesitas.',
      'Te escribimos para resolver dudas o proponerte una llamada.',
      'Te enviamos una propuesta con alcance, plazos y presupuesto.',
    ],
    emailLabel: 'También puedes escribirnos a',
    required: 'obligatorio',
    optional: 'opcional',
    fields: {
      name: { label: 'Nombre', placeholder: 'Tu nombre' },
      company: { label: 'Empresa', placeholder: 'Nombre de tu empresa o proyecto' },
      email: { label: 'Correo electrónico', placeholder: 'nombre@empresa.com' },
      service: { label: 'Tipo de servicio', placeholder: 'Selecciona un servicio' },
      budget: { label: 'Presupuesto aproximado', placeholder: 'Selecciona un rango' },
      message: {
        label: 'Descripción del proyecto',
        placeholder: 'Qué necesitas, para quién es y si tienes alguna fecha en mente.',
      },
      consent: { label: 'He leído y acepto la', link: 'política de privacidad' },
    },
    serviceOptions: {
      web: 'Desarrollo web',
      software: 'Software a medida',
      ai: 'IA y automatización',
      other: 'Otro',
    },
    budgetOptions: {
      'under-300': 'Menos de 300 €',
      '300-600': '300-600 €',
      '600-1000': '600-1.000 €',
      '1000-2500': '1.000-2.500 €',
      'over-2500': 'Más de 2.500 €',
      unknown: 'No lo sé todavía',
    },
    errors: {
      name: 'Escribe tu nombre.',
      email: 'Escribe tu correo electrónico.',
      emailInvalid: 'Revisa el correo: el formato no es válido.',
      service: 'Selecciona un tipo de servicio.',
      budget: 'Selecciona un rango de presupuesto.',
      message: 'Describe brevemente tu proyecto.',
      messageShort: 'Añade algo más de detalle (al menos 20 caracteres).',
      consent: 'Necesitamos que aceptes la política de privacidad.',
      summary: 'Revisa los campos marcados antes de enviar.',
    },
    submit: 'Enviar solicitud',
    sending: 'Enviando…',
    status: {
      successTitle: 'Solicitud enviada.',
      success: 'Hemos recibido tu mensaje. Te responderemos al correo que nos has indicado.',
      again: 'Enviar otra solicitud',
      errorTitle: 'No se ha podido enviar.',
      error: 'Ha fallado la conexión con el servicio de envío. Tu mensaje sigue en el formulario: inténtalo de nuevo en unos minutos.',
      unconfiguredTitle: 'El formulario todavía no está conectado.',
      unconfigured:
        'Tus datos son correctos, pero no se ha enviado nada: esta web aún no tiene configurado un servicio de envío.',
    },
  },

  footer: {
    description: 'Estudio tecnológico independiente. Desarrollo web, software a medida e inteligencia artificial.',
    navigation: 'Navegación',
    services: 'Servicios',
    contact: 'Contacto',
    contactForm: 'Formulario de contacto',
    legal: 'Legal',
    legalLinks: {
      legal: 'Aviso legal',
      privacy: 'Política de privacidad',
      cookies: 'Política de cookies',
    },
    rights: 'Todos los derechos reservados.',
  },

  notFound: {
    title: 'Esta página no existe.',
    text: 'Puede que el enlace esté mal escrito o que la página haya cambiado de dirección.',
    button: 'Volver al inicio',
  },

  // Textos legales: BORRADOR. Los datos marcados como [PENDIENTE] deben
  // completarse y el contenido debe revisarlo un profesional antes de publicar.
  legalPages: {
    draftNotice:
      'Borrador pendiente de completar. Los datos marcados como [PENDIENTE] deben rellenarse y el texto debe ser revisado por un profesional antes de publicar la web.',
    back: 'Volver al inicio',
    legal: {
      title: 'Aviso legal',
      sections: [
        {
          heading: 'Titular del sitio web',
          paragraphs: [
            `Nombre o razón social: ${PENDING}`,
            `NIF / CIF: ${PENDING}`,
            `Domicilio: ${PENDING}`,
            `Correo electrónico de contacto: ${PENDING}`,
            `Datos de inscripción registral, si procede: ${PENDING}`,
          ],
        },
        {
          heading: 'Objeto',
          paragraphs: [
            'Este sitio web presenta los servicios de Nodara Digital y permite solicitar información o presupuesto. El acceso al sitio implica la aceptación de las condiciones recogidas en este aviso.',
          ],
        },
        {
          heading: 'Propiedad intelectual',
          paragraphs: [
            'Los textos, el diseño, el código y los elementos gráficos de este sitio pertenecen a su titular, salvo que se indique lo contrario. No está permitida su reproducción sin autorización previa.',
          ],
        },
        {
          heading: 'Responsabilidad',
          paragraphs: [
            'El titular procura que la información publicada sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del sitio.',
            'Los proyectos mostrados en la sección de portfolio son demostraciones propias y no representan trabajos realizados para clientes.',
          ],
        },
        {
          heading: 'Legislación aplicable',
          paragraphs: [`Legislación y jurisdicción aplicables: ${PENDING}`],
        },
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      sections: [
        {
          heading: 'Responsable del tratamiento',
          paragraphs: [
            `Identidad: ${PENDING}`,
            `NIF / CIF: ${PENDING}`,
            `Domicilio: ${PENDING}`,
            `Correo electrónico: ${PENDING}`,
          ],
        },
        {
          heading: 'Qué datos tratamos y para qué',
          paragraphs: [
            'A través del formulario de contacto recogemos tu nombre, empresa (si la indicas), correo electrónico y la información que nos facilites sobre tu proyecto.',
            'Utilizamos estos datos únicamente para responder a tu solicitud y, en su caso, preparar un presupuesto.',
          ],
        },
        {
          heading: 'Base legal',
          paragraphs: [
            'El tratamiento se basa en tu consentimiento, que prestas al marcar la casilla de aceptación y enviar el formulario.',
          ],
        },
        {
          heading: 'Conservación y destinatarios',
          paragraphs: [
            `Plazo de conservación de los datos: ${PENDING}`,
            `Proveedores que tratan datos por cuenta del responsable (por ejemplo, alojamiento web o servicio de formularios): ${PENDING}`,
          ],
        },
        {
          heading: 'Tus derechos',
          paragraphs: [
            'Puedes solicitar el acceso, la rectificación o la supresión de tus datos, así como oponerte a su tratamiento, limitarlo o pedir su portabilidad, escribiendo a la dirección de contacto del responsable.',
            'También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de cookies',
      sections: [
        {
          heading: 'Qué utiliza este sitio',
          paragraphs: [
            'Este sitio web no utiliza cookies de análisis, publicidad ni seguimiento.',
            'Solo guardamos en tu navegador (almacenamiento local) el idioma que has elegido, para mostrarte la web en ese idioma en tu próxima visita. Este dato no sale de tu dispositivo.',
            'Las tipografías se sirven desde el propio sitio, sin conexiones a servicios de terceros.',
          ],
        },
        {
          heading: 'Cómo eliminar este dato',
          paragraphs: [
            'Puedes borrar el almacenamiento local desde la configuración de tu navegador, en el apartado de datos de sitios web.',
          ],
        },
        {
          heading: 'Cambios en esta política',
          paragraphs: [
            'Si en el futuro se añaden herramientas que utilicen cookies (por ejemplo, analítica web), esta política se actualizará y, cuando sea necesario, se te pedirá consentimiento.',
          ],
        },
      ],
    },
  },
}
