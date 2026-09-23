export type DisclosureCategory = 'Governance & Safety' | 'Academics & Affiliation'

export interface DisclosureDocument {
  docNumber: string
  title: string
  description: string
  tags: string[]
  category: DisclosureCategory
  isVideo?: boolean
}

export const disclosureDocuments: DisclosureDocument[] = [
  {
    docNumber: 'DOC 01',
    title: 'Affiliation / Upgradation Letter / Recent Extension of Affiliation',
    description:
      'Official grant letter of provisional and composite affiliation extension issued by the Central Board of Secondary Education, New Delhi.',
    tags: ['CBSE/AFF/3630436', 'Valid to 2029'],
    category: 'Academics & Affiliation',
  },
  {
    docNumber: 'DOC 02',
    title: 'Society / Trust / Company Registration / Renewal Certificate',
    description:
      'Articles of incorporation and active renewal certificate under the Societies Registration Act, establishing the non-profit governing body.',
    tags: ['Reg. No. 441/2012', 'Perpetual Trust'],
    category: 'Governance & Safety',
  },
  {
    docNumber: 'DOC 03',
    title: 'No Objection Certificate (NOC) Issued by State Govt.',
    description:
      'Unconditional clearance granted by School Education Department, Government of Telangana for affiliation with the Central Board.',
    tags: ['Govt. TS-EDN/114', 'Permanent NOC'],
    category: 'Governance & Safety',
  },
  {
    docNumber: 'DOC 04',
    title: 'Recognition Certificate under RTE Act, 2009',
    description:
      'Official certification granted under Right of Children to Free and Compulsory Education Act from District Educational Officer, Karimnagar.',
    tags: ['RTE-TS/KMR/892', 'Classes I–VIII'],
    category: 'Academics & Affiliation',
  },
  {
    docNumber: 'DOC 05',
    title: 'Building Safety Certificate as per National Building Code',
    description:
      'Structural stability and design validation issued by the Executive Engineer (R&B / Municipal Corporation) meeting NBC seismic zone norms.',
    tags: ['NBC-2016 Compliant', 'EE/R&B/KMR/102'],
    category: 'Governance & Safety',
  },
  {
    docNumber: 'DOC 06',
    title: 'Fire Safety Certificate Issued by Competent Authority',
    description:
      'Comprehensive Fire Prevention and Life Safety clearance granted by Telangana State Disaster Response and Fire Services Department.',
    tags: ['TS-FIRE/KMR/3301', 'Annual Inspection'],
    category: 'Governance & Safety',
  },
  {
    docNumber: 'DOC 07',
    title: 'DEO / Self Certification by School Affiliated to CBSE',
    description:
      'Statutory Appendix-III document duly counter-signed by the District Education Officer validating all infrastructural and land norms.',
    tags: ['Appendix-III Verified', 'DEO Karimnagar'],
    category: 'Academics & Affiliation',
  },
  {
    docNumber: 'DOC 08',
    title: 'Water, Health and Sanitation Certificate',
    description:
      'Laboratory potable water test reports along with health & sanitary hygiene certification from Karimnagar Municipal Health Officer.',
    tags: ['MCK-H&S/771', 'Bacteriologically Safe'],
    category: 'Governance & Safety',
  },
  {
    docNumber: 'DOC 09',
    title: 'Fee Structure of the School (Class-wise)',
    description:
      'Full disclosure of admission, composite tuition, laboratory, and activity fee schedule approved by the School Fee Regulatory Committee.',
    tags: ['Session 2024–25', 'No Capitation Fee'],
    category: 'Academics & Affiliation',
  },
  {
    docNumber: 'DOC 10',
    title: 'Annual Academic Calendar',
    description:
      'Institutional yearly roadmap containing working days count, examination schedules, co-curricular festivals, and statutory vacations.',
    tags: ['220 Working Days', 'CBSE Term Plan'],
    category: 'Academics & Affiliation',
  },
  {
    docNumber: 'DOC 11',
    title: 'School Management Committee (SMC) List',
    description:
      'Complete gazette of SMC members including educationists, teacher reps, parent delegates, and CBSE board nominees with designations.',
    tags: ['15 Executive Members', 'CBSE Bye-laws Compliant'],
    category: 'Governance & Safety',
  },
  {
    docNumber: 'DOC 12',
    title: 'Parents Teachers Association (PTA) Members List',
    description:
      'Elected council of parents and faculty coordinators designated to facilitate collaborative oversight and student welfare initiatives.',
    tags: ['Annual Term 2024', 'Equal Ratio Body'],
    category: 'Governance & Safety',
  },
  {
    docNumber: 'DOC 13',
    title: 'YouTube Inspection Video Link / Virtual Campus Tour',
    description:
      'Full unedited 360-degree infrastructural video walk-through submitted to CBSE, showcasing science labs, library, grounds, and safety assets.',
    tags: ['Official CBSE Inspection', 'Geo-tagged Media'],
    category: 'Governance & Safety',
    isVideo: true,
  },
  {
    docNumber: 'DOC 14',
    title: 'Land Certificate / Title Deed',
    description:
      'Revenue authority certified title certificate proving uninterrupted ownership of single contiguous campus parcel matching CBSE threshold.',
    tags: ['Tahsildar Certified', '>2.0 Acres Campus'],
    category: 'Governance & Safety',
  },
  {
    docNumber: 'DOC 15',
    title: 'Last Three-Year Board Examination Results',
    description:
      'Class X and XII comparative performance tabulations, pass percentage statistics, and academic cohort progress metrics.',
    tags: ['100% Pass Percentage', '2021, 2022, 2023'],
    category: 'Academics & Affiliation',
  },
  {
    docNumber: 'DOC 16',
    title: 'Lease Deed of Campus Grounds',
    description:
      'Registered long-term lease indenture of athletic arenas and extended campus grounds executed through Sub-Registrar Karimnagar.',
    tags: ['30-Year Registered Term', 'Sub-Registrar Office KMR'],
    category: 'Governance & Safety',
  },
]

export const boardResults = [
  { year: '2022–2023', grade: 'Class X (AISSE)', registered: 78, passed: 78, passPercent: '100%', exemplary: '38.4%' },
  { year: '2021–2022', grade: 'Class X (AISSE)', registered: 65, passed: 65, passPercent: '100%', exemplary: '35.2%' },
  { year: '2020–2021', grade: 'Class X (AISSE)', registered: 54, passed: 54, passPercent: '100%', exemplary: '32.8%' },
]
