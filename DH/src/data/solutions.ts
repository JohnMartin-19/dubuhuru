import type { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: '1',
    title: 'Linka Africa',
    slug: 'linka-africa',
    shortDescription: 'The Global Gateway for African Impact - revolutionizing real-time payment transparency from donors to verified causes.',
    longDescription: 'Linka Africa is transforming how the world supports African development by creating direct, transparent connections between generous donors globally and verified projects across the continent. Using cutting-edge AI and integrating both local (M-PESA, mobile money) and international payment solutions, we ensure every donation reaches its intended cause with complete transparency and real-time tracking. Our platform eliminates intermediaries, reduces fees, and empowers donors to see exactly how their contributions create impact. For African organizations and beneficiaries, Linka Africa provides access to global funding while maintaining dignity, autonomy, and direct relationships with supporters.',
    icon: 'heart-handshake',
    features: [
      'Real-time payment tracking from donor to beneficiary',
      'AI-powered project verification and impact assessment',
      'Integration with M-PESA and African mobile money platforms',
      'International payment gateway (cards, bank transfers, crypto)',
      'Blockchain-based transparency ledger',
      'Automated impact reporting with photos and videos',
      'Direct messaging between donors and beneficiaries',
      'Multi-currency support (USD, EUR, KES, etc.)',
      'Smart contracts for milestone-based disbursements',
      'Tax receipt generation for donors',
      'Fraud detection and prevention systems',
      'Mobile-first design for African beneficiaries'
    ],
    benefits: [
      '95%+ of donations reach beneficiaries (vs 60-70% traditional)',
      'Real-time transparency builds donor trust and repeat giving',
      'African organizations control their own narratives',
      'Reduced transaction costs through mobile money integration',
      'Access to global donor base for verified projects',
      'Instant disbursement to beneficiaries via mobile money',
      'AI verification eliminates lengthy manual processes',
      'Data-driven insights for better project management'
    ],
    useCases: [
      'International donors supporting education projects in rural Kenya',
      'Diaspora communities funding healthcare initiatives back home',
      'NGOs connecting with individual donors for specific programs',
      'Corporate social responsibility programs tracking impact',
      'Crowdfunding for community infrastructure projects',
      'Emergency response donations reaching affected communities directly',
      'Scholarship programs with direct student payments',
      'Conservation projects funded by global environmental supporters'
    ]
  },
  {
    id: '2',
    title: 'Climate Data Platforms',
    slug: 'climate-data-platforms',
    shortDescription: 'Real-time climate monitoring and predictive analytics for informed decision-making across sectors.',
    longDescription: 'Our climate data platform aggregates satellite imagery, IoT sensor networks, and historical climate data to provide actionable insights for agriculture, water management, and disaster preparedness. Built specifically for African contexts, it accounts for localized weather patterns, seasonal variations, and emerging climate risks.',
    icon: 'cloud-sun',
    features: [
      'Real-time weather monitoring and forecasting',
      'Drought and flood early warning systems',
      'Satellite imagery integration (Sentinel, MODIS)',
      'IoT sensor network management',
      'Historical climate trend analysis',
      'Mobile-first dashboards for field workers',
      'SMS/USSD alerts for low-connectivity areas',
      'Multi-language support (English, Swahili, local dialects)'
    ],
    benefits: [
      'Reduce crop losses by up to 40% through early warnings',
      'Improve water resource planning and allocation',
      'Enable evidence-based climate adaptation strategies',
      'Support smallholder farmers with accessible climate information',
      'Facilitate climate risk assessments for insurance and finance'
    ],
    useCases: [
      'Agricultural cooperatives planning planting schedules',
      'County governments managing water resources',
      'Insurance companies assessing climate risk',
      'NGOs coordinating disaster response',
      'Researchers studying climate change impacts'
    ]
  },
  {
    id: '3',
    title: 'Sustainability Reporting Tools',
    slug: 'sustainability-reporting',
    shortDescription: 'Streamlined ESG reporting and compliance for African businesses meeting global standards.',
    longDescription: 'Navigate the complex landscape of sustainability reporting with our comprehensive platform. From carbon accounting to social impact metrics, we help organizations measure, report, and improve their ESG performance in line with GRI, TCFD, and emerging African frameworks.',
    icon: 'file-bar-chart',
    features: [
      'Automated GHG emissions calculation (Scope 1, 2, 3)',
      'ESG data collection and verification workflows',
      'Compliance with GRI, TCFD, SASB standards',
      'Carbon footprint tracking and reduction planning',
      'Supply chain sustainability assessment',
      'Stakeholder engagement and materiality analysis',
      'Integrated reporting dashboard',
      'Export capabilities for audit and certification'
    ],
    benefits: [
      'Reduce reporting time by 60% through automation',
      'Meet investor ESG disclosure requirements',
      'Identify cost savings through resource efficiency',
      'Build stakeholder trust with transparent reporting',
      'Access green financing opportunities'
    ],
    useCases: [
      'Manufacturing companies tracking carbon emissions',
      'Banks reporting on sustainable finance portfolios',
      'Agribusinesses demonstrating sustainable practices',
      'Mining companies managing environmental impact',
      'Retailers assessing supply chain sustainability'
    ]
  },
  {
    id: '4',
    title: 'Green Finance Tech',
    slug: 'green-finance',
    shortDescription: 'Digital infrastructure connecting climate projects with sustainable investment capital.',
    longDescription: 'Bridge the gap between climate action and financing with our green finance platform. We enable transparent project evaluation, carbon credit management, and blended finance structures tailored for African renewable energy, agriculture, and conservation projects.',
    icon: 'leaf',
    features: [
      'Climate project pipeline management',
      'Carbon credit registry and trading',
      'Impact measurement and verification',
      'Investor matchmaking and due diligence tools',
      'Blended finance structuring support',
      'Green bond issuance and tracking',
      'Community benefit-sharing mechanisms',
      'Mobile money integration for smallholder payments'
    ],
    benefits: [
      'Access to $100M+ in green finance networks',
      'Transparent carbon credit verification',
      'Reduced transaction costs for climate projects',
      'Direct financing for smallholder climate solutions',
      'Compliance with international green finance standards'
    ],
    useCases: [
      'Solar energy cooperatives accessing project finance',
      'Community forests selling verified carbon credits',
      'Impact investors evaluating climate projects',
      'Development banks structuring blended finance',
      'Farmers accessing climate-smart agriculture loans'
    ]
  },
  {
    id: '5',
    title: 'Smart Resource Management',
    slug: 'resource-management',
    shortDescription: 'IoT-enabled systems for efficient water, energy, and waste management in African contexts.',
    longDescription: 'Optimize resource use with our smart management systems. From water distribution in arid regions to waste tracking in urban centers, we deploy affordable IoT solutions that work in low-connectivity environments and deliver measurable sustainability improvements.',
    icon: 'droplet',
    features: [
      'Smart water metering and leak detection',
      'Energy consumption monitoring and optimization',
      'Waste collection route optimization',
      'Irrigation automation for precision agriculture',
      'Real-time resource usage dashboards',
      'Predictive maintenance alerts',
      'Solar-powered sensor networks',
      'Offline-first mobile apps for field operations'
    ],
    benefits: [
      'Reduce water wastage by up to 30%',
      'Cut energy costs through demand management',
      'Improve waste collection efficiency by 40%',
      'Extend infrastructure lifespan with predictive maintenance',
      'Enable pay-as-you-go models for resource access'
    ],
    useCases: [
      'Water utilities reducing non-revenue water',
      'Commercial buildings optimizing energy use',
      'Municipalities improving waste management',
      'Agricultural estates implementing precision irrigation',
      'Rural communities monitoring borehole performance'
    ]
  }
];