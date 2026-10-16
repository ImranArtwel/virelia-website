// Per-route SEO metadata, applied to the HTML template at prerender time.
// Keep in sync with public/sitemap.xml.
export const SITE = 'https://virelia.co.zw'

export const pages = [
  { path: '/' },
  {
    path: '/pricing',
    title: 'Axon EMR Pricing — Per-Clinician Plans for Zimbabwe Clinics',
    description:
      'Simple per-clinician pricing for Axon EMR. Nurses, receptionists, lab techs and admins are always free. Start with a 90-day free trial, no credit card required.',
  },
  {
    path: '/hospital-management-system-zimbabwe',
    title: 'Hospital & Clinic Management System in Zimbabwe | Axon EMR',
    description:
      'Axon is a hospital and clinic management system for Zimbabwe: electronic medical records, appointments, triage, prescriptions, billing and offline mode. Free 90-day trial.',
  },
  {
    path: '/clinic-management-software-zimbabwe',
    title: 'Clinic Management Software in Zimbabwe: What to Look For | Axon EMR',
    description:
      'What clinic management software should do, questions to ask before you choose, and how Axon covers registration, triage, consultations and billing for Zimbabwe clinics.',
  },
  {
    path: '/emr-vs-paper-records-zimbabwe',
    title: 'EMR vs Paper Records for Zimbabwe Clinics | Axon EMR',
    description:
      'An honest comparison of paper files and an electronic medical record: where paper fails, what an EMR changes, common objections, and how to switch.',
  },
  {
    path: '/offline-emr-zimbabwe',
    title: 'Offline EMR for Clinics with Power Cuts & Weak Internet | Axon EMR',
    description:
      'How an offline-first EMR keeps a Zimbabwe clinic working through load-shedding and poor connectivity, and what to check before you choose one.',
  },
  {
    path: '/terms',
    title: 'Terms of Service | Axon EMR by Virelia Health Systems',
    description: 'Terms of Service for Axon, the electronic medical records platform by Virelia Health Systems.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Axon EMR by Virelia Health Systems',
    description: 'How Virelia Health Systems handles personal and patient data in Axon, in line with the Cyber and Data Protection Act.',
  },
]
