// School contact details shared across the site.
// PLACEHOLDERS: replace these before launch.
//   - SCHOOL_EMAIL: the official Vidhyapeeth mailbox
//   - MAPS_URL: the verified Google Maps pin link (currently a search for the address)

export const SCHOOL_EMAIL = '[Official Vidhyapeeth Email]'

/** True until SCHOOL_EMAIL holds a real address; placeholder emails are shown but not linked. */
export const EMAIL_IS_PLACEHOLDER = !SCHOOL_EMAIL.includes('@')

export const ADDRESS_LINES = [
  'House No. 2-10-1282, Back Side Lane,',
  'District Court, Jyothinagar,',
  'Karimnagar, Telangana – 505001',
]

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('House No. 2-10-1282, Back Side Lane, District Court, Jyothinagar, Karimnagar, Telangana 505001')

export const PHONE_DISPLAY = '09346002121'
export const PHONE_HREF = 'tel:+919346002121'

export const WHATSAPP_NUMBER = '919346002121'

export const OFFICE_HOURS = 'Mon–Sat · 8:00 AM–2:00 PM'

// PLACEHOLDERS: replace '#' with the school's official profile URLs before launch.
export const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  youtube: '#',
  linkedin: '#',
  twitter: '#',
}
