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
    title: 'Climate Data Platforms',
    slug: 'climate-data-platforms',
    status: 'Coming Soon',
    shortDescription: 'Real-time climate monitoring and predictive analytics for informed decision-making across sectors.',
    longDescription: 'Our climate data platform aggregates satellite imagery, IoT sensor networks, and historical climate data to provide actionable insights for agriculture, water management, and disaster preparedness built specifically for African contexts.',
    icon: 'cloud-sun',
    features: [
      'Real-time weather monitoring and forecasting',
      'Drought and flood early warning systems',
      'Satellite imagery integration',
      'IoT sensor network management'
    ],
    benefits: [
      'Reduce crop losses by up to 40%',
      'Improve water resource planning',
      'Enable evidence-based climate adaptation'
    ],
    useCases: [
      'Agricultural cooperatives planning planting',
      'County governments managing water resources'
    ]
  },
  {
    id: '3',
    title: 'Sustainability Reporting Tools',
    slug: 'sustainability-reporting',
    status: 'Coming Soon',
    shortDescription: 'Streamlined ESG reporting and compliance for African businesses meeting global standards.',
    longDescription: 'Navigate the complex landscape of sustainability reporting with our comprehensive platform. From carbon accounting to social impact metrics, we help organizations measure, report, and improve their ESG performance.',
    icon: 'file-bar-chart',
    features: [
      'Automated GHG emissions calculation',
      'ESG data collection workflows',
      'Compliance with GRI, TCFD, SASB standards'
    ],
    benefits: [
      'Reduce reporting time by 60%',
      'Meet investor ESG disclosure requirements',
      'Access green financing opportunities'
    ],
    useCases: [
      'Manufacturing companies tracking carbon',
      'Banks reporting on sustainable finance'
    ]
  },
  {
    id: '4',
    title: 'Green Finance Tech',
    slug: 'green-finance',
    status: 'Coming Soon',
    shortDescription: 'Digital infrastructure connecting climate projects with sustainable investment capital.',
    longDescription: 'Bridge the gap between climate action and financing. We enable transparent project evaluation, carbon credit management, and blended finance structures tailored for African renewable energy and agriculture.',
    icon: 'leaf',
    features: [
      'Climate project pipeline management',
      'Carbon credit registry and trading',
      'Impact measurement and verification'
    ],
    benefits: [
      'Access to global green finance networks',
      'Transparent carbon credit verification',
      'Reduced transaction costs for climate projects'
    ],
    useCases: [
      'Solar energy cooperatives accessing finance',
      'Community forests selling carbon credits'
    ]
  },
  {
    id: '5',
    title: 'Smart Resource Management',
    slug: 'resource-management',
    status: 'Coming Soon',
    shortDescription: 'IoT-enabled systems for efficient water, energy, and waste management in African contexts.',
    longDescription: 'Optimize resource use with our smart management systems. We deploy affordable IoT solutions that work in low-connectivity environments to deliver measurable sustainability improvements.',
    icon: 'droplet',
    features: [
      'Smart water metering and leak detection',
      'Energy consumption optimization',
      'Waste collection route optimization'
    ],
    benefits: [
      'Reduce water wastage by up to 30%',
      'Cut energy costs through demand management',
      'Improve waste collection efficiency'
    ],
    useCases: [
      'Water utilities reducing non-revenue water',
      'Commercial buildings optimizing energy use'
    ]
  }
];