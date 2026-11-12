// English copy. Must mirror the key structure of es.js exactly.

const PENDING = '[PENDING]'

export default {
  meta: {
    home: {
      title: 'Nodara Digital — Web development, custom software and AI',
      description:
        'Independent technology studio. We design and build websites, custom software and AI-powered automation for businesses and professionals.',
    },
    legal: {
      title: 'Legal notice — Nodara Digital',
      description: 'Legal information about the owner and terms of use of the Nodara Digital website.',
    },
    privacy: {
      title: 'Privacy policy — Nodara Digital',
      description: 'How Nodara Digital handles the personal data it receives through this website.',
    },
    cookies: {
      title: 'Cookie policy — Nodara Digital',
      description: 'What the Nodara Digital website stores in your browser, and why.',
    },
    notFound: {
      title: 'Page not found — Nodara Digital',
      description: 'The page you are looking for does not exist or has moved.',
    },
  },

  nav: {
    home: 'Home',
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    cta: 'Let’s talk',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    main: 'Main navigation',
    language: 'Language',
    skip: 'Skip to content',
    languages: { es: 'Español', en: 'English' },
  },

  hero: {
    title: ['We build', 'what’s next.'],
    subtitle: 'We design and develop digital solutions that help businesses evolve, automate and grow.',
    primary: 'Explore our services',
    secondary: 'Start your project',
    servicesLabel: 'What we do',
  },

  intro: {
    title: 'Technology should drive your business, not complicate it.',
    paragraphs: [
      'At Nodara Digital we don’t start from a tool. We start from your business: how you work, what eats up your time and what you want to achieve. Then we build the solution that fits.',
      'Sometimes that’s a website that explains clearly what you do. Sometimes it’s an application that brings order to your day-to-day, or an automation that removes repetitive work. The goal is always the same: technology that works for you.',
    ],
    points: [
      {
        title: 'Made to fit',
        text: 'Every project is shaped around the needs and the size of your business.',
      },
      {
        title: 'Built around a goal',
        text: 'Before writing any code, we agree on what it’s for and how we’ll know it works.',
      },
      {
        title: 'No jargon',
        text: 'We explain every decision in plain language, so you always know what we’re doing and why.',
      },
    ],
  },

  services: {
    title: 'Three ways to move your business forward.',
    lead: 'Start with a single service or combine them. We’ll help you work out what you actually need.',
    includes: 'Includes',
    items: {
      web: {
        label: 'Web development',
        title: 'Web development',
        description: 'We design and build modern, fast websites tailored to each business.',
        includes: [
          'Corporate websites',
          'Landing pages',
          'Responsive design',
          'SEO optimisation',
          'Forms and conversions',
        ],
        cta: 'I need a website',
      },
      software: {
        label: 'Custom software',
        title: 'Custom software',
        description: 'We develop applications and digital tools built around the way each company works.',
        includes: [
          'Web applications',
          'Admin dashboards',
          'Booking systems',
          'Client management',
          'Custom platforms',
        ],
        cta: 'I need an application',
      },
      ai: {
        label: 'AI & automation',
        title: 'AI and automation',
        description: 'We automate tasks and connect your tools so your business can work more efficiently.',
        includes: [
          'Process automation',
          'API integrations',
          'Smart assistants',
          'Automated admin tasks',
          'Artificial intelligence integration',
        ],
        cta: 'I want to automate processes',
      },
    },
  },

  engineering: {
    title: 'Software done right, inside and out.',
    lead: 'What you see matters, and so does what you don’t. We bring the same care to the interface, the logic and the connections between systems.',
    practices: [
      {
        title: 'Clean, maintainable code',
        text: 'Clear structure and reusable components, so extending the project never means rebuilding it.',
      },
      {
        title: 'Performance from day one',
        text: 'Lightweight pages and applications that load fast on any device and connection.',
      },
      {
        title: 'Data handled with care',
        text: 'We validate every piece of data that comes in and protect your clients’ information.',
      },
      {
        title: 'Accessible and adaptable',
        text: 'Interfaces that work with a keyboard, a screen reader and any screen size.',
      },
    ],
    demo: {
      label: 'Code examples',
      note: 'Illustrative example',
      tabs: { ui: 'Interface', api: 'API', automation: 'Automation' },
      output: { ui: 'Preview', api: 'Response', automation: 'Log' },
      pick: 'Pick a time',
      confirm: 'Confirm booking',
      log: ['Request received', 'Classified with AI: “web”', 'Contact created in the CRM', 'Team notified'],
    },
    stack: 'Technologies we work with',
  },

  process: {
    title: 'From idea to result.',
    lead: 'A clear process in five stages, so you always know where your project stands.',
    steps: [
      { title: 'Discovery', text: 'We look closely at your needs and your goals.' },
      { title: 'Strategy', text: 'We define the technology solution that fits best.' },
      { title: 'Development', text: 'We design, code and build the project.' },
      { title: 'Launch', text: 'We release the solution and check that everything works.' },
      { title: 'Evolution', text: 'We provide support and improvements so you can keep growing.' },
    ],
  },

  work: {
    title: 'Demonstration projects.',
    lead: 'We’re just getting started, so we’d rather be upfront: these three projects are our own concepts, created to show how we work. They are not client commissions.',
    badge: 'In-house concept',
    view: 'View project',
    items: {
      consulting: {
        kind: 'Web development',
        title: 'Corporate website for a consultancy',
        description:
          'A clear, fast site presenting services and team, designed so visitors find what they need and request a first meeting.',
        tags: ['Corporate website', 'Responsive', 'SEO'],
      },
      booking: {
        kind: 'Custom software',
        title: 'Booking and management web app',
        description:
          'A tool to manage appointments, availability and clients from a single dashboard, on desktop and mobile.',
        tags: ['Web application', 'Dashboard', 'Bookings'],
      },
      automation: {
        kind: 'AI and automation',
        title: 'Smart automation for a business',
        description:
          'A workflow that collects incoming requests, sorts them with the help of AI and sends each one to the right tool, with no manual copy and paste.',
        tags: ['Automation', 'APIs', 'AI'],
      },
    },
    slot: {
      title: 'The next one could be yours.',
      text: 'This space is reserved for real projects. If you have one in mind, we’d love to hear about it.',
      cta: 'Tell us about your project',
    },
  },

  about: {
    title: 'We build solutions with purpose.',
    paragraphs: [
      'Nodara Digital is an independent technology studio at the very start of its journey. We were founded on a simple idea: building digital solutions that are useful, functional and well designed.',
      'Being a small studio has its advantages. You talk directly to the person designing and coding your project, decisions are made quickly and every job gets our full attention.',
      'We don’t promise what we can’t deliver. We prefer well-defined projects, realistic timelines and clear communication from start to finish.',
    ],
    values: [
      { title: 'Usefulness', text: 'If it doesn’t solve a real problem, we don’t build it.' },
      { title: 'Care', text: 'Details matter, in the design and in the code.' },
      { title: 'Honesty', text: 'We tell you what you need, even when it’s less than you asked for.' },
      { title: 'Closeness', text: 'Direct contact, with no middlemen and no complicated language.' },
    ],
  },

  cta: {
    title: 'Got an idea? Let’s make it real.',
    text: 'Tell us what you need and we’ll find the best technology solution for your business.',
    button: 'Start a project',
  },

  contact: {
    title: 'Tell us about your project.',
    lead: 'Fill in the form with whatever is clear so far. It doesn’t all need to be defined yet: that’s what the first conversation is for.',
    nextTitle: 'What happens next',
    next: [
      'We read your message and review what you need.',
      'We write back to clear up any questions or suggest a call.',
      'We send you a proposal with scope, timeline and budget.',
    ],
    emailLabel: 'You can also email us at',
    required: 'required',
    optional: 'optional',
    fields: {
      name: { label: 'Name', placeholder: 'Your name' },
      company: { label: 'Company', placeholder: 'Your company or project name' },
      email: { label: 'Email', placeholder: 'name@company.com' },
      service: { label: 'Type of service', placeholder: 'Select a service' },
      budget: { label: 'Approximate budget', placeholder: 'Select a range' },
      message: {
        label: 'Project description',
        placeholder: 'What you need, who it’s for and whether you have a date in mind.',
      },
      consent: { label: 'I have read and accept the', link: 'privacy policy' },
    },
    serviceOptions: {
      web: 'Web development',
      software: 'Custom software',
      ai: 'AI and automation',
      other: 'Other',
    },
    budgetOptions: {
      'under-300': 'Under €300',
      '300-600': '€300-600',
      '600-1000': '€600-1,000',
      '1000-2500': '€1,000-2,500',
      'over-2500': 'Over €2,500',
      unknown: 'I don’t know yet',
    },
    errors: {
      name: 'Enter your name.',
      email: 'Enter your email address.',
      emailInvalid: 'Check the email address: the format isn’t valid.',
      service: 'Select a type of service.',
      budget: 'Select a budget range.',
      message: 'Briefly describe your project.',
      messageShort: 'Add a little more detail (at least 20 characters).',
      consent: 'We need you to accept the privacy policy.',
      summary: 'Check the highlighted fields before sending.',
    },
    submit: 'Send request',
    sending: 'Sending…',
    status: {
      successTitle: 'Request sent.',
      success: 'We’ve received your message. We’ll reply to the email address you gave us.',
      again: 'Send another request',
      errorTitle: 'Your request couldn’t be sent.',
      error: 'The connection to the delivery service failed. Your message is still in the form: try again in a few minutes.',
      unconfiguredTitle: 'The form isn’t connected yet.',
      unconfigured:
        'Your details are valid, but nothing has been sent: this website doesn’t have a delivery service set up yet.',
    },
  },

  footer: {
    description: 'Independent technology studio. Web development, custom software and artificial intelligence.',
    navigation: 'Navigation',
    services: 'Services',
    contact: 'Contact',
    contactForm: 'Contact form',
    legal: 'Legal',
    legalLinks: {
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      cookies: 'Cookie policy',
    },
    rights: 'All rights reserved.',
  },

  notFound: {
    title: 'This page doesn’t exist.',
    text: 'The link may be mistyped, or the page may have moved.',
    button: 'Back to home',
  },

  // Legal copy: DRAFT. Anything marked [PENDING] must be completed and the
  // text reviewed by a professional before the site goes live.
  legalPages: {
    draftNotice:
      'Draft to be completed. Details marked [PENDING] must be filled in and the text reviewed by a professional before this website is published.',
    back: 'Back to home',
    legal: {
      title: 'Legal notice',
      sections: [
        {
          heading: 'Website owner',
          paragraphs: [
            `Name or company name: ${PENDING}`,
            `Tax ID: ${PENDING}`,
            `Registered address: ${PENDING}`,
            'Contact email: nodaradigital@gmail.com',
            `Company registration details, if applicable: ${PENDING}`,
          ],
        },
        {
          heading: 'Purpose',
          paragraphs: [
            'This website presents the services of Nodara Digital and allows visitors to request information or a quote. Using the site implies acceptance of the terms set out in this notice.',
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            'The text, design, code and graphic elements of this site belong to its owner unless stated otherwise. They may not be reproduced without prior permission.',
          ],
        },
        {
          heading: 'Liability',
          paragraphs: [
            'The owner endeavours to keep the published information accurate and up to date, but does not guarantee that it is free of errors or that the site will be available without interruption.',
            'The projects shown in the portfolio section are in-house demonstrations and do not represent work carried out for clients.',
          ],
        },
        {
          heading: 'Governing law',
          paragraphs: [`Governing law and jurisdiction: ${PENDING}`],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      sections: [
        {
          heading: 'Data controller',
          paragraphs: [
            `Identity: ${PENDING}`,
            `Tax ID: ${PENDING}`,
            `Address: ${PENDING}`,
            'Email: nodaradigital@gmail.com',
          ],
        },
        {
          heading: 'What data we process and why',
          paragraphs: [
            'Through the contact form we collect your name, company (if you provide it), email address and the information you share about your project.',
            'We use this data solely to reply to your request and, where relevant, to prepare a quote.',
          ],
        },
        {
          heading: 'Legal basis',
          paragraphs: [
            'Processing is based on your consent, which you give by ticking the acceptance box and submitting the form.',
          ],
        },
        {
          heading: 'Retention and recipients',
          paragraphs: [
            `Data retention period: ${PENDING}`,
            `Providers that process data on behalf of the controller (for example, web hosting or a form service): ${PENDING}`,
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'You may request access to, rectification or erasure of your data, object to or restrict its processing, or ask for its portability, by writing to the controller’s contact address.',
            'You may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie policy',
      sections: [
        {
          heading: 'What this site uses',
          paragraphs: [
            'This website does not use analytics, advertising or tracking cookies.',
            'We only store your chosen language in your browser (local storage), so the site appears in that language on your next visit. This information never leaves your device.',
            'Fonts are served from the site itself, with no connections to third-party services.',
          ],
        },
        {
          heading: 'How to remove this data',
          paragraphs: [
            'You can clear local storage from your browser settings, under site data.',
          ],
        },
        {
          heading: 'Changes to this policy',
          paragraphs: [
            'If tools that use cookies are added in the future (for example, web analytics), this policy will be updated and, where required, you will be asked for consent.',
          ],
        },
      ],
    },
  },
}
