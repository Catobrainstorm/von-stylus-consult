export interface TeamMember {
  id: number
  name: string
  role: string
  tag: string
  shortBio: string
  fullBio: string
  expertise: string[]
  initials: string
  accent: string
  // Unsplash images — professional headshot aesthetic
  image: string
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Kemi Vaughan-Aderibigbe',
    role: 'Founder & Lead Consultant',
    tag: 'Marketing Strategist',
    shortBio: 'Global communications strategist with CIM UK certifications. Founded VON STYLUS to deliver precision strategy across Africa, Europe, and Asia.',
    fullBio: 'Kemi Vaughan-Aderibigbe is a global communications and marketing strategist with certifications from the Chartered Institute of Marketing (CIM) UK. She is the founder of VON STYLUS Consult, delivering strategy, creative media, advertising, and events across Africa, Europe, North America, and Asia. Her portfolio includes GIZ, VETToolbox, Glovo, Lifebank, Coronation Merchant Bank, Greenwich Merchant Bank, VisionSpring, and Landing.Jobs. Kemi is a certified trainer in Employability and Soft Skills with a track record designing programmes for young professionals across Africa.',
    expertise: ['Global Communications', 'Marketing Strategy', 'Business Consulting', 'Employability Training', 'Youth Development'],
    initials: 'KV',
    accent: '#c9a84c',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  },
  {
    id: 2,
    name: 'Zika Taiwo',
    role: 'HR Consultant',
    tag: 'People & Operations',
    shortBio: 'HR professional building data-driven people systems that transform organisational performance and make bold plans executable.',
    fullBio: 'Zika Taiwo is a Human Resources professional with expertise in project management, team strategy coordination, capacity building, business process management, and operational reporting. She has designed and implemented people systems across corporate environments that improve organisational performance. At VON STYLUS Consult, Zika provides the people strategy and operational structure that makes bold business plans executable.',
    expertise: ['HR Strategy', 'Capacity Building', 'Project Management', 'Business Process Management', 'Operational Reporting'],
    initials: 'ZT',
    accent: '#8b8fe0',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
  },
  {
    id: 3,
    name: 'Oluwatobi A. Ogunjimi',
    role: 'Creative Lead',
    tag: 'Brand & UI/UX',
    shortBio: 'Multidisciplinary creative specialising in brand design, UI design and UX research. Every visual asset intentional, precise, and client-aligned.',
    fullBio: 'Oluwatobi A. Ogunjimi is a multidisciplinary creative professional specialising in brand design, UI design, and UX research. He has collaborated with a wide range of brands to develop creative solutions that are both visually compelling and strategically grounded. At VON STYLUS Consult, Oluwatobi leads all creative output, ensuring every visual asset is intentional, precise, and aligned with client objectives.',
    expertise: ['Brand Design', 'UI Design', 'UX Research', 'Visual Storytelling', 'Creative Direction'],
    initials: 'OA',
    accent: '#5254c5',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    id: 4,
    name: 'Rachael Ayodeji',
    role: 'Communications Officer',
    tag: 'Digital & GenZ',
    shortBio: 'Digital communications expert building GenZ-focused strategies — translating brand objectives into content that moves culture.',
    fullBio: 'Rachael Ayodeji is a digital communications professional with a focus on brand strategy, content development, and audience engagement. She specialises in building communications strategies for brands targeting the GenZ market. Her understanding of digital trends, platform behaviour, and youth culture enables her to develop strategies that are current, relevant, and effective.',
    expertise: ['Digital Communications', 'Brand Strategy', 'GenZ Marketing', 'Content Development', 'Trend Analysis'],
    initials: 'RA',
    accent: '#c9a84c',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
  },
  {
    id: 5,
    name: 'Adetokunbo Aderibigbe',
    role: 'Corporate Affairs Advisor',
    tag: 'Strategic Communications',
    shortBio: 'Corporate communications strategist specialising in executive messaging, stakeholder engagement, and change communications across industries.',
    fullBio: 'Adetokunbo Aderibigbe is a corporate affairs and communications professional specialising in strategic communication planning and execution. He works with business leadership to develop internal and external communications that deliver measurable outcomes. His experience spans corporate positioning, stakeholder engagement, change communications, and executive messaging.',
    expertise: ['Corporate Affairs', 'Strategic Communications', 'Internal Communications', 'Executive Messaging', 'Stakeholder Engagement'],
    initials: 'AA',
    accent: '#8b8fe0',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  },
  {
    id: 6,
    name: 'John Vaughan',
    role: 'Cloud Security Advisor',
    tag: 'Technology & Identity',
    shortBio: 'Cloud security engineer & identity architect with 6+ years across Azure, AWS, GCP. Senior IAM Security Engineer at Scopely. Based in Portugal.',
    fullBio: 'John Vaughan is a cloud security engineer and identity architect with over six years of experience building and securing environments across Azure, AWS, and GCP. He currently serves as Senior IAM Security Engineer at Scopely, leading identity and access management for fast-moving game studio operations. His expertise covers zero-trust architecture, least-privilege design, Okta and Entra ID federation, RBAC and ABAC policy-as-code, and automation using Terraform, Python, and PowerShell.',
    expertise: ['Cloud Security', 'Identity & Access Management', 'Zero-Trust Architecture', 'Multi-Cloud (Azure, AWS, GCP)', 'IAM Automation'],
    initials: 'JV',
    accent: '#5254c5',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
  {
    id: 7,
    name: 'Omobola Gidigbi',
    role: 'Finance & Accounting Consultant',
    tag: 'Financial Intelligence',
    shortBio: '8+ years in financial reporting and accountancy across corporate institutions and boutique firms — precise, reliable, thorough.',
    fullBio: 'Omobola Gidigbi is an accounting professional with over eight years of experience in financial reporting and accountancy. She has worked across corporate institutions and boutique accounting firms, giving her broad exposure to diverse financial environments. Her expertise includes bookkeeping, budget preparation, financial analysis, tax reconciliation, auditing, and financial investigation.',
    expertise: ['Financial Reporting', 'Bookkeeping', 'Budget Preparation', 'Financial Analysis', 'Tax Reconciliation', 'Auditing'],
    initials: 'OG',
    accent: '#c9a84c',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b9e77d8b?w=600&q=80',
  },
  {
    id: 8,
    name: 'Ilawole Oluwatosin',
    role: 'International Development Advisor',
    tag: 'Programme Strategy & MEL',
    shortBio: '12+ years across 56 countries. Led global MEL portfolio for the British Council. Managed GIZ and FCDO-funded programmes at scale.',
    fullBio: 'Ilawole Oluwatosin is a senior leader in international development with more than 12 years managing complex, donor-funded portfolios in programme delivery and Monitoring, Evaluation, Research and Learning (MERL). At the British Council, he led the global MEL portfolio for Higher Education, Science and TVET across 56 countries. As Programme Manager for the PwC-UK implemented Business Innovation Facility, his portfolio generated income growth exceeding 50%, equivalent to £1.7 million, benefiting over 7,500 smallholder farmers. He holds a bachelor\'s in Sociology, a master\'s in Industrial and Labour Relations, and is currently pursuing a Doctorate in Business Administration.',
    expertise: ['Programme Strategy & Design', 'Monitoring, Evaluation & Learning', 'International Development', 'Donor Relations', 'Budget & Project Management', 'Policy & Evidence'],
    initials: 'IO',
    accent: '#8b8fe0',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80',
  },
  {
    id: 9,
    name: 'Omotola Spence',
    role: 'Growth & Expansion Consultant',
    tag: 'Digital Marketing',
    shortBio: '4+ years at Glovo Nigeria. Built and scaled Logistics-as-a-Service vertical. Currently Expansion Lead & City Manager for Priority Cities.',
    fullBio: 'Omotola Spence is a marketing and business expansion strategist with over four years at Glovo Nigeria across digital marketing, logistics operations, and city expansion. She currently leads Glovo\'s business expansion as Expansion Lead and City Manager for Priority Cities. Prior to Glovo, she drove product launches at Blend Technologies including a campaign generating over 1,700 units in sales within two months.',
    expertise: ['Business Expansion', 'Digital Marketing', 'Product Marketing', 'Go-to-Market Strategy', 'Brand Development', 'Content Strategy'],
    initials: 'OS',
    accent: '#5254c5',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&q=80',
  },
  {
    id: 10,
    name: 'Funmi Shodipe, Ph.D.',
    role: 'Advisor & Communications Consultant',
    tag: 'Media & Academia',
    shortBio: 'Ph.D. media expert spanning academia, broadcasting, and strategic media management. Lecturer at Miva Open University, Lagos.',
    fullBio: 'Funmi Shodipe, Ph.D. is a media and communications expert with experience spanning academia, broadcasting, and strategic media management. She serves as Lecturer and Programme Coordinator of Mass Communication at Miva Open University, and Deputy Director of its Lagos Study Centre. She holds a Ph.D. in Communication and Media Studies from Redeemer\'s University, Ede. Her research covers nation branding, media framing, development communication, and the influence of AI on journalism. She brings a thoughtful blend of industry experience, academic insight, and forward-looking perspective on media innovation.',
    expertise: ['Media & Communications', 'Academic Leadership', 'Nation Branding', 'Development Communication', 'Media Innovation & AI', 'Strategic Media Management'],
    initials: 'FS',
    accent: '#c9a84c',
    image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=600&q=80',
  },
]

export const services = [
  {
    number: '01',
    title: 'Business & Management Consulting',
    description: 'Strategic planning, organisational design, growth advisory, and business transformation built to deliver measurable, lasting outcomes.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=75',
  },
  {
    number: '02',
    title: 'Creative Media',
    description: 'Content strategy, visual storytelling, branded media production — creative that connects, converts, and commands lasting attention.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=75',
  },
  {
    number: '03',
    title: 'Advertising',
    description: 'Bold, targeted campaigns that cut through the noise across digital and traditional channels. Precision-crafted for your audience.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=75',
  },
  {
    number: '04',
    title: 'Events',
    description: 'From concept to curtain call — corporate events, brand activations, and experiences engineered to leave a lasting mark.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75',
  },
]

export const whyUs = [
  { n: '01', title: 'Precision Thinking', desc: 'Every strategy grounded in data, logic, and lived expertise. No vague deliverables — only clarity.' },
  { n: '02', title: 'End-to-End Capability', desc: 'From boardroom strategy to billboard campaigns — the full spectrum of business growth covered.' },
  { n: '03', title: 'Bold Execution', desc: 'We commit to outcomes, not just outputs. Our team stays engaged until results are achieved.' },
  { n: '04', title: 'Client-First Always', desc: 'Every decision made with your success at the centre. Your goals are our goals — full stop.' },
  { n: '05', title: 'Creative Edge', desc: 'Our consulting is infused with creative thinking. We see opportunities others miss.' },
  { n: '06', title: 'Zero Tolerance for Average', desc: 'Mediocrity is not in our vocabulary. If it doesn\'t move the needle, we don\'t do it.' },
]

export const approach = [
  { n: '01', title: 'Discover', desc: 'Deep-dive diagnosis of your business: challenges, goals, and market position. We listen before we speak.' },
  { n: '02', title: 'Design', desc: 'We craft a bold, precision-engineered strategy tailored to your context — no templates, no guesswork.' },
  { n: '03', title: 'Deploy', desc: 'Hands-on implementation support. We stay involved through execution, not just planning.' },
  { n: '04', title: 'Deliver', desc: 'Measurable results, clear reporting, and continuous optimisation. Outcomes you can see and feel.' },
]

export const clients = [
  'GIZ', 'VETToolbox', 'Glovo', 'Lifebank', 'Coronation Merchant Bank',
  'Greenwich Merchant Bank', 'VisionSpring', 'Landing.Jobs', 'British Council',
  'FCDO / DFID', 'Push Up', 'LATC', 'Jobberman', 'Periscope Consulting',
  'Edo Jobs', 'SKYE', 'German Cooperation', 'Omniverse',
]

export const stats = [
  { n: '12+', label: 'Years of Excellence' },
  { n: '56', label: 'Countries Reached' },
  { n: '18+', label: 'Global Clients' },
  { n: '£2M+', label: 'Budgets Managed' },
]