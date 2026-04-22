export const themes = [
  {
    id: 1,
    slug: 'humanitarian',
    name: 'Humanitarian & Disaster Analytics',
    shortName: 'Humanitarian',
    color: 'blue',
    icon: '🌍',
    description:
      'We develop data-driven methods to improve decision-making in humanitarian operations and disaster response. Our work spans pre-disaster preparedness planning, real-time resource allocation during crises, and post-disaster recovery analytics. We collaborate with NGOs and government agencies to deploy actionable models in the field.',
    projectIds: [1, 2],
    peopleIds: [1, 2, 5],
  },
  {
    id: 2,
    slug: 'agriculture',
    name: 'Agriculture Analytics',
    shortName: 'Agriculture',
    color: 'green',
    icon: '🌾',
    description:
      'Our agriculture analytics research focuses on applying operations research and machine learning to optimize farm-level and regional-level agricultural systems. Topics include crop yield prediction, precision irrigation scheduling, supply chain resilience for smallholder farmers, and climate-adaptive cropping strategies.',
    projectIds: [3, 4],
    peopleIds: [1, 3, 6],
  },
  {
    id: 3,
    slug: 'agrifood',
    name: 'Agrifood Analytics',
    shortName: 'Agrifood',
    color: 'amber',
    icon: '🥗',
    description:
      'Agrifood analytics bridges the gap between primary agricultural production and end consumers. We study food supply chain optimization, waste reduction, traceability systems, and policy interventions to build more sustainable and equitable food systems. Our interdisciplinary team incorporates systems thinking, econometrics, and network analysis.',
    projectIds: [5, 6],
    peopleIds: [2, 4, 6],
  },
  {
    id: 4,
    slug: 'healthcare',
    name: 'Healthcare Analytics',
    shortName: 'Healthcare',
    color: 'rose',
    icon: '🏥',
    description:
      'We apply quantitative modeling, simulation, and machine learning to pressing healthcare system challenges. Research areas include hospital capacity planning, patient flow optimization, health equity analysis, epidemic modeling, and the integration of wearable sensor data for preventive care.',
    projectIds: [7, 8],
    peopleIds: [1, 4, 5],
  },
]

export const people = [
  {
    id: 1,
    name: 'Dr. Ayşe Kara',
    role: 'faculty',
    title: 'Associate Professor',
    bio: 'Dr. Kara leads the lab and has over 15 years of experience in operations research applied to humanitarian logistics and healthcare systems. She has published in Management Science, Operations Research, and Transportation Science.',
    interests: ['Humanitarian Logistics', 'Stochastic Optimization', 'Healthcare Operations'],
    themeIds: [1, 2, 4],
    email: 'a.kara@university.edu',
  },
  {
    id: 2,
    name: 'Dr. Mehmet Yılmaz',
    role: 'faculty',
    title: 'Assistant Professor',
    bio: 'Dr. Yılmaz specializes in network optimization and machine learning for disaster response. Before joining the lab, he worked as a data scientist at the UN World Food Programme.',
    interests: ['Network Optimization', 'Machine Learning', 'Disaster Response'],
    themeIds: [1, 3],
    email: 'm.yilmaz@university.edu',
  },
  {
    id: 3,
    name: 'Emre Demir',
    role: 'phd',
    title: 'PhD Candidate',
    bio: 'Emre is a third-year PhD student working on precision agriculture and crop yield forecasting using remote sensing data. He holds an MSc in Industrial Engineering.',
    interests: ['Precision Agriculture', 'Remote Sensing', 'Deep Learning'],
    themeIds: [2],
    email: 'e.demir@university.edu',
  },
  {
    id: 4,
    name: 'Selin Çelik',
    role: 'phd',
    title: 'PhD Candidate',
    bio: 'Selin researches food supply chain transparency and traceability using blockchain and graph analytics. Her work is funded by a national food safety grant.',
    interests: ['Supply Chain Analytics', 'Graph Theory', 'Food Systems'],
    themeIds: [3, 4],
    email: 's.celik@university.edu',
  },
  {
    id: 5,
    name: 'Berk Arslan',
    role: 'masters',
    title: 'MSc Student',
    bio: 'Berk is an MSc student focused on simulation models for hospital emergency departments. He is co-supervised with the medical school.',
    interests: ['Discrete Event Simulation', 'Hospital Management', 'Queuing Theory'],
    themeIds: [1, 4],
    email: 'b.arslan@university.edu',
  },
  {
    id: 6,
    name: 'Zeynep Öztürk',
    role: 'masters',
    title: 'MSc Student',
    bio: 'Zeynep applies econometric and ML methods to study smallholder farmer income variability and resilience to climate shocks across different agrifood value chains.',
    interests: ['Econometrics', 'Climate Resilience', 'Food Security'],
    themeIds: [2, 3],
    email: 'z.ozturk@university.edu',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Prepositioning Relief Items Under Uncertainty',
    description:
      'Developing stochastic programming models to optimally preposition emergency relief items before a disaster strikes, accounting for demand uncertainty and road network failures.',
    themeId: 1,
    status: 'ongoing',
    year: 2024,
    peopleIds: [1, 5],
  },
  {
    id: 2,
    title: 'Last-Mile Delivery in Post-Disaster Settings',
    description:
      'Designing adaptive routing algorithms for last-mile humanitarian delivery under dynamic road accessibility conditions, validated on real data from recent earthquake responses.',
    themeId: 1,
    status: 'ongoing',
    year: 2023,
    peopleIds: [2, 5],
  },
  {
    id: 3,
    title: 'Crop Yield Forecasting with Satellite Imagery',
    description:
      'Using multispectral satellite data and convolutional neural networks to provide early-season crop yield forecasts at field and county level.',
    themeId: 2,
    status: 'ongoing',
    year: 2024,
    peopleIds: [1, 3],
  },
  {
    id: 4,
    title: 'Optimal Irrigation Scheduling via RL',
    description:
      'Applying reinforcement learning to learn irrigation policies that maximize crop yield while minimizing water usage across heterogeneous soil and weather conditions.',
    themeId: 2,
    status: 'completed',
    year: 2022,
    peopleIds: [3, 6],
  },
  {
    id: 5,
    title: 'Traceability in Fresh Produce Supply Chains',
    description:
      'Building a graph-based traceability framework to track fresh produce from farm to retailer, enabling rapid contamination source identification and reducing food waste.',
    themeId: 3,
    status: 'ongoing',
    year: 2023,
    peopleIds: [2, 4],
  },
  {
    id: 6,
    title: 'Food Loss Reduction in Cold Chain Networks',
    description:
      'Modeling temperature-sensitive cold chain networks to identify structural bottlenecks causing food loss, with optimization interventions evaluated under budget constraints.',
    themeId: 3,
    status: 'completed',
    year: 2022,
    peopleIds: [4, 6],
  },
  {
    id: 7,
    title: 'Emergency Department Capacity Planning',
    description:
      'Discrete-event simulation and machine learning hybrid approach for real-time patient flow management and long-term capacity planning in hospital emergency departments.',
    themeId: 4,
    status: 'ongoing',
    year: 2024,
    peopleIds: [1, 5],
  },
  {
    id: 8,
    title: 'Health Equity in Resource Allocation',
    description:
      'Multi-criteria optimization models that incorporate equity constraints into healthcare resource allocation decisions, applied to vaccination distribution in low-income regions.',
    themeId: 4,
    status: 'ongoing',
    year: 2023,
    peopleIds: [4, 5],
  },
]

export const publications = [
  {
    id: 1,
    title: 'Robust Prepositioning of Emergency Supplies Under Correlated Demand and Network Disruption',
    authors: ['A. Kara', 'B. Arslan'],
    venue: 'Operations Research',
    year: 2024,
    doi: '10.1287/opre.2024.xxxx',
  },
  {
    id: 2,
    title: 'Adaptive Last-Mile Delivery Routing for Disaster Relief with Dynamic Road Accessibility',
    authors: ['M. Yılmaz', 'B. Arslan'],
    venue: 'Transportation Science',
    year: 2024,
    doi: '10.1287/trsc.2024.xxxx',
  },
  {
    id: 3,
    title: 'Multi-Season Crop Yield Prediction from Sentinel-2 Imagery Using Temporal CNNs',
    authors: ['E. Demir', 'A. Kara'],
    venue: 'Computers and Electronics in Agriculture',
    year: 2023,
    doi: '10.1016/j.compag.2023.xxxx',
  },
  {
    id: 4,
    title: 'Reinforcement Learning for Deficit Irrigation Under Stochastic Weather',
    authors: ['E. Demir', 'Z. Öztürk'],
    venue: 'Agricultural Water Management',
    year: 2023,
    doi: '10.1016/j.agwat.2023.xxxx',
  },
  {
    id: 5,
    title: 'Graph-Based Traceability for Fresh Produce Recall Management',
    authors: ['S. Çelik', 'M. Yılmaz'],
    venue: 'European Journal of Operational Research',
    year: 2024,
    doi: '10.1016/j.ejor.2024.xxxx',
  },
  {
    id: 6,
    title: 'Cold Chain Network Design with Spoilage-Dependent Loss Functions',
    authors: ['S. Çelik', 'Z. Öztürk'],
    venue: 'International Journal of Production Economics',
    year: 2023,
    doi: '10.1016/j.ijpe.2023.xxxx',
  },
  {
    id: 7,
    title: 'A Hybrid Simulation-ML Framework for Emergency Department Throughput Optimization',
    authors: ['A. Kara', 'B. Arslan'],
    venue: 'Health Care Management Science',
    year: 2023,
    doi: '10.1007/s10729-023-xxxx',
  },
  {
    id: 8,
    title: 'Equity-Constrained Vaccine Distribution: A Multi-Objective Integer Programming Approach',
    authors: ['S. Çelik', 'B. Arslan', 'A. Kara'],
    venue: 'Management Science',
    year: 2022,
    doi: '10.1287/mnsc.2022.xxxx',
  },
  {
    id: 9,
    title: 'Smallholder Income Variability and Agrifood Value Chain Participation',
    authors: ['Z. Öztürk', 'M. Yılmaz'],
    venue: 'Food Policy',
    year: 2022,
    doi: '10.1016/j.foodpol.2022.xxxx',
  },
]

export const themeColors = {
  blue:  { bg: 'bg-blue-50',   border: 'border-blue-200',  text: 'text-blue-700',  tag: 'bg-blue-100 text-blue-700'  },
  green: { bg: 'bg-green-50',  border: 'border-green-200', text: 'text-green-700', tag: 'bg-green-100 text-green-700' },
  amber: { bg: 'bg-amber-50',  border: 'border-amber-200', text: 'text-amber-700', tag: 'bg-amber-100 text-amber-700' },
  rose:  { bg: 'bg-rose-50',   border: 'border-rose-200',  text: 'text-rose-700',  tag: 'bg-rose-100 text-rose-700'  },
}

export function getTheme(id)    { return themes.find(t => t.id === id) }
export function getPerson(id)   { return people.find(p => p.id === id) }
export function getProject(id)  { return projects.find(p => p.id === id) }
