export const profile = {
  name: 'Cristina Popa',
  role: 'Backend & Full-Stack Developer',
  tagline:
    'Full-Stack Developer with 3 years of experience building microservices and data-intensive systems in the healthcare and optical-retail domains.',
  location: 'Bucharest, Romania',
  email: 'popa_cristina@outlook.com',
  github: 'https://github.com/popacristina',
  linkedin: 'https://www.linkedin.com/in/cristina-popa-b73a89252',
}

export const about = [
  'I build the backend systems that keep products running: event-driven microservices, REST APIs and the data pipelines behind them. Most of my work lives in the healthcare and optical-retail space, where correctness and multi-tenant data isolation matter.',
  'My core stack is Java with Spring and Spring Modulith, plus PHP/Laravel, with PostgreSQL at the center of most designs. I am comfortable across the stack — Vue.js on the frontend — but my focus is architecture, data, and making systems integrate cleanly.',
]

export type Project = {
  title: string
  summary: string
  highlights: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    title: 'Multi-Specialty Clinic — Microservices Platform',
    summary:
      'Team-built platform for a multi-specialty medical clinic using an event-driven microservices architecture.',
    highlights: [
      'Contributed the appointments and configuration-template microservices.',
      'Event-driven communication via the transactional outbox pattern (pg_outbox).',
      'Configuration templates stored as JSON in MongoDB, later refactored to PostgreSQL JSONB for performance.',
    ],
    stack: ['Java', 'Spring Modulith', 'PostgreSQL', 'MongoDB', 'pg_outbox'],
  },
  {
    title: 'Superset Analytics — Automated Multi-Tenant Provisioning',
    summary:
      'A medical-statistics and optical-sales analytics solution built from scratch on Apache Superset.',
    highlights: [
      'Built 2 dashboard templates (clinical and optical-sales statistics).',
      'Automated provisioning that generated ~400 client-specific dashboards across ~200 clients.',
      'Proxy middleware for secure authentication and multi-tenant access control.',
    ],
    stack: ['Apache Superset', 'Python', 'Multi-tenancy', 'Auth proxy'],
  },
  {
    title: 'Thumbnail-Generation Microservice',
    summary:
      'Image-processing service for the clinic platform, decoupled via a message queue.',
    highlights: [
      'Redis for asynchronous inter-service communication.',
      'Python imaging libraries for image-to-thumbnail transformation.',
      'SeaweedFS (AWS S3-compatible SDK) for object storage.',
    ],
    stack: ['Python', 'Redis', 'SeaweedFS', 'S3'],
  },
  {
    title: 'Legacy MySQL → PostgreSQL ELT Migration',
    summary:
      'A repeatable ELT pipeline to migrate a legacy database into the microservices platform.',
    highlights: [
      'postgres_fdw for cross-database access and loading into a staging database.',
      'Python and dbt for the transformation layer.',
      'Validated end-to-end ahead of a phased production rollout.',
    ],
    stack: ['PostgreSQL', 'postgres_fdw', 'dbt', 'Python', 'MySQL'],
  },
  {
    title: 'Employee Bonus / Incentive Engine',
    summary:
      'Bonus and incentive calculation system added to an existing employee portal.',
    highlights: [
      'Business logic modeled in the Drools rules engine.',
      'Automated bonus computation via Apache Airflow ETL pipelines.',
      'Java/Spring backend with a Vue.js frontend, covering 50 employees.',
    ],
    stack: ['Java', 'Spring', 'Drools', 'Apache Airflow', 'Vue.js'],
  },
  {
    title: 'External Integrations & APIs',
    summary:
      'APIs and integrations connecting the platform to partner systems.',
    highlights: [
      'RESTful APIs in PHP 8.1 (Laravel) exposing data to external systems.',
      'GoHighLevel CRM integration to automate customer workflows.',
      'Hoya lens-order synchronization for reliable cross-platform data exchange.',
    ],
    stack: ['PHP 8.1', 'Laravel', 'REST', 'GoHighLevel', 'Hoya'],
  },
]

export const experience = [
  {
    company: 'AppSmart',
    role: 'Full-Stack Developer',
    period: 'May 2023 – Present',
    points: [
      'Design and build event-driven microservices (Java, Spring Modulith) and RESTful APIs (PHP 8.1, Laravel) for healthcare and optical-retail platforms.',
      'Own data pipelines and migrations across PostgreSQL, MySQL and MongoDB using dbt, postgres_fdw and Apache Airflow.',
      'Built analytics provisioning, integrations (CRM, Hoya) and an image-processing microservice.',
    ],
  },
  {
    company: 'Bitdefender',
    role: 'Junior QA Engineer',
    period: 'Jul 2021 – Oct 2021',
    points: [
      'Manual testing (regression, functional, end-to-end) and automated tests with Jest.',
      'Defect tracking in JIRA and participation in code reviews.',
    ],
  },
]

export const education = {
  school: 'Politehnica University of Bucharest',
  degree: 'Faculty of Electronics, Telecommunications and Information Technology',
  period: 'Oct 2018 – Sep 2022',
}

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'PHP', 'Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { group: 'Backend', items: ['Spring', 'Spring Modulith', 'Laravel', 'CodeIgniter', 'Node.js', 'REST APIs'] },
  { group: 'Architecture', items: ['Microservices', 'Event-Driven', 'Transactional Outbox', 'Multi-tenancy', 'Drools'] },
  { group: 'Data & Pipelines', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'dbt', 'Apache Airflow', 'Apache Superset'] },
  { group: 'Frontend', items: ['Vue.js', 'HTML', 'CSS'] },
  { group: 'Tools & Cloud', items: ['Git', 'Docker', 'SeaweedFS (S3)', 'Postman'] },
]
