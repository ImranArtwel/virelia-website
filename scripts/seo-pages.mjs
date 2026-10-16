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
