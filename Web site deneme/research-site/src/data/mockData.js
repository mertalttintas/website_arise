export const themeColorMap = {
  'humanitarian-disaster-analytics': {
    badge: 'bg-red-100 text-red-800',
    border: 'border-red-200',
    bg: 'bg-red-50',
    dot: 'bg-red-500',
    icon: '🌊',
  },
  'agriculture-analytics': {
    badge: 'bg-green-100 text-green-800',
    border: 'border-green-200',
    bg: 'bg-green-50',
    dot: 'bg-green-500',
    icon: '🌾',
  },
  'agrifood-analytics': {
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    bg: 'bg-amber-50',
    dot: 'bg-amber-500',
    icon: '🥗',
  },
  'healthcare-analytics': {
    badge: 'bg-blue-100 text-blue-800',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    dot: 'bg-blue-500',
    icon: '🏥',
  },
}

export const themes = [
  {
    id: 1,
    slug: 'humanitarian-disaster-analytics',
    title: 'Humanitarian & Disaster Analytics',
    shortDescription:
      'Applying data science and operations research to improve disaster preparedness, response, and recovery.',
    description:
      'Our humanitarian and disaster analytics research develops data-driven tools to support decision-making in crisis situations. We work on real-time risk assessment, resource allocation optimization, and post-disaster recovery planning. Collaborations include UNHCR, WFP, and national disaster management agencies.',
    projectIds: [1, 5],
    peopleIds: [1, 3, 4, 7],
  },
  {
    id: 2,
    slug: 'agriculture-analytics',
    title: 'Agriculture Analytics',
    shortDescription:
      'Leveraging machine learning and remote sensing to optimize agricultural productivity and sustainability.',
    description:
      'We develop predictive models and decision-support systems for farmers and agricultural stakeholders. Our work integrates satellite imagery, IoT sensor data, and weather forecasts to provide actionable insights for crop management, yield prediction, and precision irrigation.',
    projectIds: [2, 6],
    peopleIds: [1, 2, 5, 9],
  },
  {
    id: 3,
    slug: 'agrifood-analytics',
    title: 'Agrifood Analytics',
    shortDescription:
      'Enhancing transparency, efficiency, and sustainability across agrifood supply chains.',
    description:
      'Our agrifood analytics research spans the entire food value chain — from farm to fork. We develop traceability systems, waste reduction algorithms, and nutritional quality monitoring tools that help create more sustainable and equitable food systems.',
    projectIds: [3, 7],
    peopleIds: [2, 6, 8, 10],
  },
  {
    id: 4,
    slug: 'healthcare-analytics',
    title: 'Healthcare Analytics',
    shortDescription:
      'Using advanced analytics to improve clinical outcomes, resource allocation, and public health.',
    description:
      'We apply machine learning and operations research to pressing healthcare challenges. Projects range from early disease detection to hospital capacity planning, all aimed at improving patient outcomes and health system efficiency.',
    projectIds: [4, 8],
    peopleIds: [1, 4, 7, 9],
  },
]

export const projects = [
  {
    id: 1,
    title: 'DisasterReady: Real-Time Flood Risk Assessment',
    description:
      'A machine learning framework integrating hydrological models, satellite data, and social vulnerability indices to provide real-time flood risk maps for emergency management agencies.',
    themeSlug: 'humanitarian-disaster-analytics',
    themeLabel: 'Humanitarian & Disaster Analytics',
    peopleIds: [1, 4, 7],
    status: 'Active',
    year: 2024,
  },
  {
    id: 2,
    title: 'CropYield AI: Satellite-Based Yield Prediction',
    description:
      'Deep learning models trained on multispectral Sentinel-2 imagery to predict crop yields at regional scale, enabling proactive food security interventions.',
    themeSlug: 'agriculture-analytics',
    themeLabel: 'Agriculture Analytics',
    peopleIds: [1, 2, 5],
    status: 'Active',
    year: 2023,
  },
  {
    id: 3,
    title: 'FoodTrace: Supply Chain Transparency Platform',
    description:
      'A blockchain-inspired data pipeline for tracking food provenance and quality attributes across multi-tier supply chains, reducing fraud and food safety incidents.',
    themeSlug: 'agrifood-analytics',
    themeLabel: 'Agrifood Analytics',
    peopleIds: [2, 6, 8],
    status: 'Active',
    year: 2024,
  },
  {
    id: 4,
    title: 'EarlyDetect: Multi-Cancer Screening Analytics',
    description:
      'An ensemble learning approach combining clinical biomarkers and lifestyle factors for early-stage cancer risk stratification in population-level screening programs.',
    themeSlug: 'healthcare-analytics',
    themeLabel: 'Healthcare Analytics',
    peopleIds: [1, 4, 9],
    status: 'Active',
    year: 2023,
  },
  {
    id: 5,
    title: 'ReliefOps: Humanitarian Logistics Optimization',
    description:
      'Mixed-integer programming and simulation models for optimizing the pre-positioning and distribution of humanitarian aid under supply and demand uncertainty.',
    themeSlug: 'humanitarian-disaster-analytics',
    themeLabel: 'Humanitarian & Disaster Analytics',
    peopleIds: [3, 7, 10],
    status: 'Completed',
    year: 2022,
  },
  {
    id: 6,
    title: 'SmartIrrigation: Precision Water Management',
    description:
      'IoT sensor networks and reinforcement learning algorithms to minimize water usage while maximizing crop yield in water-stressed agricultural regions.',
    themeSlug: 'agriculture-analytics',
    themeLabel: 'Agriculture Analytics',
    peopleIds: [2, 9],
    status: 'Active',
    year: 2024,
  },
  {
    id: 7,
    title: 'NutriChain: Nutritional Quality Monitoring',
    description:
      'A data-driven platform that tracks and predicts nutritional degradation of fresh produce throughout the cold chain, enabling targeted quality interventions.',
    themeSlug: 'agrifood-analytics',
    themeLabel: 'Agrifood Analytics',
    peopleIds: [6, 8, 10],
    status: 'Active',
    year: 2023,
  },
  {
    id: 8,
    title: 'HealthFlow: Hospital Resource Allocation',
    description:
      'Stochastic optimization and simulation models for dynamic allocation of beds, staff, and equipment across multi-department hospital settings during surge events.',
    themeSlug: 'healthcare-analytics',
    themeLabel: 'Healthcare Analytics',
    peopleIds: [1, 7, 9],
    status: 'Completed',
    year: 2022,
  },
]

export const people = [
  {
    id: 1,
    name: 'Dr. Ahmet Yılmaz',
    role: 'Faculty',
    title: 'Associate Professor & Lab Director',
    bio: 'Dr. Yılmaz leads OptiLab and specializes in operations research, humanitarian logistics, and machine learning for social good. He has published over 50 peer-reviewed papers and serves on the editorial boards of several OR journals.',
    interests: ['Humanitarian Logistics', 'Stochastic Optimization', 'Machine Learning'],
    projectIds: [1, 2, 4, 8],
  },
  {
    id: 2,
    name: 'Dr. Selin Kaya',
    role: 'Faculty',
    title: 'Assistant Professor',
    bio: 'Dr. Kaya focuses on agricultural data science and remote sensing. She collaborates extensively with farming cooperatives and NGOs to translate research findings into deployable tools.',
    interests: ['Remote Sensing', 'Food Security', 'Agricultural Data Science'],
    projectIds: [2, 3, 6],
  },
  {
    id: 3,
    name: 'Dr. Mehmet Özdemir',
    role: 'Faculty',
    title: 'Research Scientist',
    bio: 'Dr. Özdemir brings expertise in simulation modeling and disaster risk reduction. He has advised government agencies and international organizations on emergency response planning frameworks.',
    interests: ['Simulation Modeling', 'Disaster Risk Reduction', 'Decision Support'],
    projectIds: [5],
  },
  {
    id: 4,
    name: 'Zeynep Arslan',
    role: 'Student',
    title: 'PhD Candidate',
    bio: 'Zeynep\'s dissertation focuses on integrating social vulnerability data into disaster risk assessment frameworks. She holds an MSc in Industrial Engineering from METU.',
    interests: ['Disaster Analytics', 'Social Vulnerability', 'GIS & Spatial Analysis'],
    projectIds: [1, 4],
  },
  {
    id: 5,
    name: 'Can Demir',
    role: 'Student',
    title: 'PhD Student (2nd Year)',
    bio: 'Can is developing deep learning architectures for multi-temporal crop classification using Sentinel-2 imagery. He completed his BSc in Electrical Engineering at Bilkent University.',
    interests: ['Deep Learning', 'Satellite Imagery', 'Crop Classification'],
    projectIds: [2],
  },
  {
    id: 6,
    name: 'Elif Şahin',
    role: 'Student',
    title: 'MSc Student',
    bio: 'Elif investigates traceability technologies for agrifood supply chains. Her thesis examines adoption barriers of digital tracking systems among SMEs in the Turkish food sector.',
    interests: ['Supply Chain Traceability', 'SME Adoption', 'Agrifood Systems'],
    projectIds: [3, 7],
  },
  {
    id: 7,
    name: 'Burak Yıldız',
    role: 'Student',
    title: 'PhD Candidate',
    bio: 'Burak applies reinforcement learning to dynamic resource allocation in humanitarian crises. He has completed research internships at UNHCR and WFP field operations.',
    interests: ['Reinforcement Learning', 'Humanitarian AI', 'Resource Allocation'],
    projectIds: [1, 5, 8],
  },
  {
    id: 8,
    name: 'Ayşe Çelik',
    role: 'Student',
    title: 'MSc Student',
    bio: 'Ayşe builds predictive models for food waste reduction in retail distribution networks. She holds a BSc in Food Engineering and brings domain expertise to her data science work.',
    interests: ['Food Waste Reduction', 'Predictive Modeling', 'Retail Analytics'],
    projectIds: [3, 7],
  },
  {
    id: 9,
    name: 'Dr. Hasan Koç',
    role: 'Faculty',
    title: 'Postdoctoral Researcher',
    bio: 'Hasan specializes in health data analytics and clinical decision support systems. He holds a PhD in Computer Science from Boğaziçi University and is interested in NLP for clinical notes.',
    interests: ['Clinical Analytics', 'NLP for Health', 'Precision Medicine'],
    projectIds: [4, 6, 8],
  },
  {
    id: 10,
    name: 'Fatma Aydın',
    role: 'Student',
    title: 'PhD Student (3rd Year)',
    bio: 'Fatma researches optimization models for sustainable agrifood supply networks, with particular focus on incorporating fairness and equity constraints into stochastic programs.',
    interests: ['Supply Chain Optimization', 'Sustainability', 'Fairness in OR'],
    projectIds: [5, 7],
  },
]

export const publications = [
  {
    id: 1,
    title: 'Multi-Hazard Risk Assessment Using Ensemble Machine Learning: A Case Study in Flood-Prone Regions',
    authors: 'Yılmaz A., Arslan Z., Yıldız B.',
    venue: 'International Journal of Disaster Risk Reduction',
    year: 2024,
    themeSlug: 'humanitarian-disaster-analytics',
  },
  {
    id: 2,
    title: 'Satellite-Driven Crop Yield Forecasting with Transformer-Based Models',
    authors: 'Kaya S., Demir C., Yılmaz A.',
    venue: 'Computers and Electronics in Agriculture',
    year: 2024,
    themeSlug: 'agriculture-analytics',
  },
  {
    id: 3,
    title: 'Sustainable Agrifood Supply Chain Design Under Equity and Environmental Constraints',
    authors: 'Aydın F., Yılmaz A.',
    venue: 'European Journal of Operational Research',
    year: 2024,
    themeSlug: 'agrifood-analytics',
  },
  {
    id: 4,
    title: 'Transfer Learning for Low-Resource Crop Type Mapping in Semi-Arid Regions',
    authors: 'Demir C., Kaya S.',
    venue: 'Remote Sensing of Environment',
    year: 2024,
    themeSlug: 'agriculture-analytics',
  },
  {
    id: 5,
    title: 'Robust Humanitarian Pre-Positioning Under Demand and Supply Uncertainty',
    authors: 'Özdemir M., Yıldız B.',
    venue: 'European Journal of Operational Research',
    year: 2023,
    themeSlug: 'humanitarian-disaster-analytics',
  },
  {
    id: 6,
    title: 'A Blockchain-Enabled Framework for End-to-End Agrifood Traceability',
    authors: 'Şahin E., Çelik A., Kaya S.',
    venue: 'Food Control',
    year: 2023,
    themeSlug: 'agrifood-analytics',
  },
  {
    id: 7,
    title: 'Early Cancer Risk Stratification Using Multi-Modal Clinical Data Fusion',
    authors: 'Yılmaz A., Arslan Z., Koç H.',
    venue: 'Journal of Biomedical Informatics',
    year: 2023,
    themeSlug: 'healthcare-analytics',
  },
  {
    id: 8,
    title: 'Reinforcement Learning for Dynamic Humanitarian Last-Mile Logistics',
    authors: 'Yıldız B., Yılmaz A.',
    venue: 'Transportation Research Part E: Logistics and Transportation Review',
    year: 2023,
    themeSlug: 'humanitarian-disaster-analytics',
  },
  {
    id: 9,
    title: 'Stochastic Programming for Hospital Bed Allocation During Pandemic Surges',
    authors: 'Yılmaz A., Yıldız B., Koç H.',
    venue: 'Health Care Management Science',
    year: 2022,
    themeSlug: 'healthcare-analytics',
  },
  {
    id: 10,
    title: 'Precision Irrigation Scheduling via Deep Reinforcement Learning and IoT Sensor Fusion',
    authors: 'Kaya S., Koç H.',
    venue: 'Agricultural Water Management',
    year: 2022,
    themeSlug: 'agriculture-analytics',
  },
  {
    id: 11,
    title: 'Nutritional Quality Prediction in Cold Chain Logistics: A Data-Driven Approach',
    authors: 'Çelik A., Aydın F., Şahin E.',
    venue: 'Postharvest Biology and Technology',
    year: 2022,
    themeSlug: 'agrifood-analytics',
  },
  {
    id: 12,
    title: 'Social Vulnerability Indices in Natural Disaster Planning: A Systematic Review and Meta-Analysis',
    authors: 'Arslan Z., Özdemir M.',
    venue: 'Natural Hazards and Earth System Sciences',
    year: 2022,
    themeSlug: 'humanitarian-disaster-analytics',
  },
]

// ── Helper functions ──────────────────────────────────────────────────────────

export function getThemeBySlug(slug) {
  return themes.find((t) => t.slug === slug)
}

export function getProjectsByIds(ids) {
  return projects.filter((p) => ids.includes(p.id))
}

export function getPeopleByIds(ids) {
  return people.filter((p) => ids.includes(p.id))
}

export function getPersonById(id) {
  return people.find((p) => p.id === id)
}
