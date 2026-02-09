import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Rift Valley Climate Monitoring Network',
    description: 'Deployed 50+ IoT weather stations across Nakuru and Baringo counties to provide real-time climate data for 10,000+ smallholder farmers. The system delivers SMS alerts in Swahili and Kalenjin, enabling farmers to make informed decisions on planting and harvesting.',
    sector: 'Agriculture',
    country: 'Kenya',
    impactArea: 'Climate Resilience',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop',
    stats: [
      { label: 'Farmers Reached', value: '10,000+' },
      { label: 'Weather Stations', value: '50' },
      { label: 'Crop Loss Reduction', value: '35%' }
    ],
    completionDate: '2025-11'
  },
  {
    id: '2',
    title: 'Nairobi Carbon Footprint Initiative',
    description: 'Partnered with 25 manufacturing companies in Nairobi to implement comprehensive carbon accounting systems. The project resulted in verified emissions reductions and positioned participants to access green financing.',
    sector: 'Manufacturing',
    country: 'Kenya',
    impactArea: 'ESG',
    image: 'https://images.unsplash.com/photo-1694434948850-ed51bd461733?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5haXJvYmklMjBjYXJib24lMjBjcmVkaXRzfGVufDB8fDB8fHww',
    stats: [
      { label: 'Companies Enrolled', value: '25' },
      { label: 'CO₂ Reduced', value: '15,000 tonnes' },
      { label: 'Cost Savings', value: 'KES 45M' }
    ],
    completionDate: '2025-09'
  },
  {
    id: '3',
    title: 'Lake Victoria Water Quality Platform',
    description: 'Developed a cross-border water monitoring system for Lake Victoria, tracking pollution levels, algae blooms, and fish stock health. The platform serves environmental agencies in Kenya, Uganda, and Tanzania.',
    sector: 'Water Management',
    country: 'Kenya, Uganda, Tanzania',
    impactArea: 'Water Resources',
    image: 'https://images.unsplash.com/photo-1690715667558-aa97c374fef6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFrZSUyMFZpY3RvcmlhfGVufDB8fDB8fHww',
    stats: [
      { label: 'Countries', value: '3' },
      { label: 'Monitoring Points', value: '120' },
      { label: 'Communities Impacted', value: '500,000+' }
    ],
    completionDate: '2025-08'
  },
  {
    id: '4',
    title: 'Kakamega Forest Carbon Credit Program',
    description: 'Established a community-managed carbon credit system for Kakamega Forest, connecting local conservation groups with international buyers. The program has generated sustainable income for 15 villages while protecting indigenous forest.',
    sector: 'Conservation',
    country: 'Kenya',
    impactArea: 'Green Finance',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop',
    stats: [
      { label: 'Villages Involved', value: '15' },
      { label: 'Carbon Credits', value: '50,000 tonnes' },
      { label: 'Revenue Generated', value: 'KES 120M' }
    ],
    completionDate: '2025-06'
  },
  {
    id: '5',
    title: 'Mombasa Port Smart Energy System',
    description: 'Implemented energy management systems across Kenya Ports Authority facilities in Mombasa, reducing energy consumption and integrating solar power. The project serves as a model for green port infrastructure in East Africa.',
    sector: 'Energy',
    country: 'Kenya',
    impactArea: 'Energy Efficiency',
    image: 'https://plus.unsplash.com/premium_photo-1661900538689-e2c25124aa35?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9tYmFzYSUyMHBvcnR8ZW58MHx8MHx8fDA%3D',
    stats: [
      { label: 'Energy Saved', value: '40%' },
      { label: 'Solar Capacity', value: '2.5 MW' },
      { label: 'Annual Savings', value: 'KES 85M' }
    ],
    completionDate: '2025-04'
  },
  {
    id: '6',
    title: 'Turkana Drought Early Warning System',
    description: 'Deployed satellite and ground-based monitoring to predict drought conditions in Turkana County. The system integrates with county disaster management and humanitarian organizations to trigger early response.',
    sector: 'Humanitarian',
    country: 'Kenya',
    impactArea: 'Climate Resilience',
    image: 'https://media.istockphoto.com/id/153912577/photo/viiew-of-turkana-village-kenya.webp?a=1&b=1&s=612x612&w=0&k=20&c=308DNbc8IBbW7798zCIuds9bZJB2O5XbJc1TjEBmvV0=',
    stats: [
      { label: 'Population Covered', value: '1M+' },
      { label: 'Early Warnings Issued', value: '24' },
      { label: 'Response Time', value: '72 hours' }
    ],
    completionDate: '2025-03'
  },
  {
    id: '7',
    title: 'Kisumu Smart Waste Management',
    description: 'Launched IoT-enabled waste collection system in Kisumu City, optimizing routes and improving recycling rates. The platform includes mobile apps for waste collectors and real-time monitoring for city officials.',
    sector: 'Urban Services',
    country: 'Kenya',
    impactArea: 'Waste Management',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop',
    stats: [
      { label: 'Waste Diverted', value: '8,000 tonnes' },
      { label: 'Collection Efficiency', value: '+45%' },
      { label: 'Recycling Rate', value: '28%' }
    ],
    completionDate: '2025-01'
  },
  {
    id: '8',
    title: 'Kericho Tea Estate Sustainability Platform',
    description: 'Provided ESG reporting and certification support for tea estates in Kericho seeking Rainforest Alliance and Fair Trade certification. The platform streamlined data collection and improved compliance rates.',
    sector: 'Agriculture',
    country: 'Kenya',
    impactArea: 'ESG',
    image: 'https://media.istockphoto.com/id/2204651136/photo/kenya-tea-leaves-farm-farming-large-scale-plantations-estate-kericho-county-landscapes.webp?a=1&b=1&s=612x612&w=0&k=20&c=N65gLfxWUUX8M9gCbBdxRa19-lii7Mc-yILDW4yo1sw=',
    stats: [
      { label: 'Estates Certified', value: '12' },
      { label: 'Farmers Trained', value: '3,500' },
      { label: 'Premium Increase', value: '18%' }
    ],
    completionDate: '2025-12'
  }
];
