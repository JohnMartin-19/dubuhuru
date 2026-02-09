import type { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: '1',
    title: 'Linka Africa',
    slug: 'linka-africa',
    status: 'active',
    shortDescription: 'The Global Gateway for African Impact - revolutionizing real-time payment transparency from donors to verified causes.',
    longDescription: 'Linka Africa is transforming how the world supports African development by creating direct, transparent connections between generous donors globally and verified projects across the continent. Using cutting-edge AI and integrating both local (M-PESA, mobile money) and international payment solutions, we ensure every donation reaches its intended cause with complete transparency and real-time tracking.',
    icon: 'heart-handshake',
    features: [
      'Real-time payment tracking from donor to beneficiary',
      'AI-powered project verification and impact assessment',
      'Integration with M-PESA and African mobile money platforms',
      'International payment gateway (cards, bank transfers, crypto)',
      'Blockchain-based transparency ledger',
      'Automated impact reporting with photos and videos'
    ],
    benefits: [
      '95%+ of donations reach beneficiaries',
      'Real-time transparency builds donor trust',
      'Reduced transaction costs through mobile money'
    ],
    useCases: [
      'International donors supporting education projects',
      'Diaspora communities funding healthcare initiatives',
      'NGOs connecting with individual donors'
    ]
  },
  {
    id: '2',
    title: 'Sustainable Intelligent Systems',
    slug: 'sustainable-intelligent-systems',
    status: 'Coming Soon',
    shortDescription: 'Comprehensive AI-powered platforms for climate monitoring, ESG compliance, green finance, and smart resource management.',
    longDescription: 'Our Sustainable Intelligent Systems represent a unified suite of cutting-edge technologies designed to address Africa\'s most pressing environmental and sustainability challenges. Leveraging AI, IoT, satellite imagery, and blockchain technology, we provide end-to-end solutions for climate action, sustainable business practices, green finance access, and efficient resource management—all built specifically for African contexts and infrastructure realities.',
    icon: 'cpu',
    features: [
      'Real-time climate monitoring and predictive analytics using satellite imagery and IoT sensors',
      'Automated ESG reporting and compliance with global standards (GRI, TCFD, SASB)',
      'Climate project pipeline management and carbon credit registry',
      'Smart water, energy, and waste management systems',
      'Drought and flood early warning systems',
      'GHG emissions calculation and carbon accounting',
      'Impact measurement and verification frameworks',
      'IoT-enabled resource optimization for low-connectivity environments'
    ],
    benefits: [
      'Reduce crop losses by up to 40% through climate intelligence',
      'Cut reporting time by 60% with automated ESG compliance',
      'Access global green finance networks and carbon credit markets',
      'Reduce water wastage by up to 30% and optimize energy consumption',
      'Enable evidence-based climate adaptation and disaster preparedness',
      'Meet investor ESG disclosure requirements and access green financing',
      'Improve operational efficiency while reducing environmental impact'
    ],
    useCases: [
      'Agricultural cooperatives using climate data for optimal planting and harvest planning',
      'Manufacturing companies tracking carbon emissions and meeting sustainability targets',
      'Solar energy cooperatives accessing green finance through verified impact metrics',
      'Water utilities reducing non-revenue water through smart metering and leak detection',
      'County governments managing water resources and disaster preparedness',
      'Banks reporting on sustainable finance portfolios',
      'Community forests monetizing conservation through carbon credit sales',
      'Commercial buildings optimizing energy use and waste management'
    ]
  }
];