// Mock data for TopTier Technologies Services

export const serviceCategories = [
  {
    id: 'strategic',
    title: 'Strategic Services',
    services: [
      {
        id: 'strategy',
        name: 'IT Strategy & Budgeting',
        benefit: 'Align technology with business goals',
        price: 500,
        icon: 'LineChart'
      },
      {
        id: 'governance',
        name: 'IT Governance & Assessments',
        benefit: 'Ensure compliance and optimize operations',
        price: 750,
        icon: 'Shield'
      },
      {
        id: 'project',
        name: 'Project Management & Transitions',
        benefit: 'Seamless technology migrations',
        price: 800,
        icon: 'Workflow'
      },
      {
        id: 'inventory',
        name: 'Inventory Management & Analytics',
        benefit: 'Track and optimize IT assets',
        price: 400,
        icon: 'Database'
      }
    ]
  },
  {
    id: 'it-services',
    title: 'IT Services',
    services: [
      {
        id: 'network-support',
        name: '24×7 Network Support',
        benefit: 'Round-the-clock monitoring and response',
        price: 1200,
        icon: 'Network'
      },
      {
        id: 'server-support',
        name: 'Server Support',
        benefit: 'Maintain peak server performance',
        price: 900,
        icon: 'Server'
      },
      {
        id: 'helpdesk',
        name: 'Helpdesk Support',
        benefit: 'User support when they need it',
        price: 600,
        icon: 'Headphones'
      },
      {
        id: 'sql',
        name: 'SQL Database & Documentation',
        benefit: 'Optimized database management',
        price: 700,
        icon: 'FileCode'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    services: [
      {
        id: 'soc',
        name: 'SOC 24×7 Monitoring',
        benefit: 'Continuous threat detection',
        price: 1500,
        icon: 'Eye'
      },
      {
        id: 'mdr-edr',
        name: 'MDR & EDR Solutions',
        benefit: 'Advanced threat response',
        price: 1300,
        icon: 'ShieldCheck'
      },
      {
        id: 'ai-threat',
        name: 'AI Threat Detection',
        benefit: 'Next-gen security intelligence',
        price: 1800,
        icon: 'Brain'
      },
      {
        id: 'backup',
        name: 'Backup & Disaster Recovery',
        benefit: 'Protect critical business data',
        price: 1000,
        icon: 'HardDrive'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    services: [
      {
        id: 'azure',
        name: 'Azure & O365 Migration',
        benefit: 'Smooth cloud transitions',
        price: 2000,
        icon: 'Cloud'
      },
      {
        id: 'cloud-hosting',
        name: 'Cloud Hosting & Management',
        benefit: 'Scalable infrastructure',
        price: 1400,
        icon: 'CloudCog'
      },
      {
        id: 'network-design',
        name: 'Network Design & Low Voltage Cabling',
        benefit: 'Build reliable infrastructure',
        price: 1100,
        icon: 'Cable'
      },
      {
        id: 'server-refresh',
        name: 'Server Refresh / Upgrades',
        benefit: 'Modernize your hardware',
        price: 1500,
        icon: 'RefreshCw'
      }
    ]
  }
];

export const pricingTiers = [
  {
    id: 'core',
    name: 'CORE',
    description: 'Remote workers, home offices, VPN/MFA/SAP users',
    priceRange: '$50-110/mo',
    priceDetails: '$50/mo for 2 devices, $70/mo for 3 devices, $90/mo for 4-5 devices, +$20/device additional',
    users: '2-6 devices',
    sla: '24-hour response (business hours 8am-5pm)',
    features: [
      'Backup & disaster recovery',
      'Antivirus protection',
      'System patching',
      'Email & phone support',
      'Remote support only'
    ],
    recommended: false
  },
  {
    id: 'core-plus',
    name: 'CORE+',
    description: 'Small business (3-50 people)',
    priceRange: '$95/user/mo',
    priceDetails: 'Minimum $1,500/month',
    users: '3-50 users',
    sla: '1-hour P1, 4-hour P2 (business hours)',
    features: [
      'RMM monitoring',
      'EDR (Endpoint Detection & Response)',
      'Dedicated account manager',
      'Quarterly business review (QBR)',
      'Priority support'
    ],
    recommended: false
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    description: 'Mid-market (50-250 people), compliance needs',
    priceRange: '$145/user/mo',
    priceDetails: 'Minimum $4,500/month',
    users: '50-250 users',
    sla: '15-minute P1 (24/7), 1-hour P2 (24/7)',
    features: [
      '24/7 support available',
      'Virtual CIO (vCIO)',
      'Monthly disaster recovery testing',
      'Compliance management',
      'Advanced security monitoring'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    description: 'Large organizations (250+ people), mission-critical',
    priceRange: '$150-175/user/mo',
    priceDetails: 'Custom pricing based on needs',
    users: '250+ users',
    sla: '30-second P1 (24/7)',
    features: [
      'Dedicated operations team',
      'SOC/NOC monitoring',
      'Custom IT strategy',
      'White-glove service',
      'Enterprise-grade security'
    ],
    recommended: false
  }
];

export const trustBadges = [
  { name: 'Microsoft Partner', logo: 'microsoft' },
  { name: 'Fortinet', logo: 'fortinet' },
  { name: 'Dell Technologies', logo: 'dell' },
  { name: 'Cisco', logo: 'cisco' }
];

export const metrics = [
  { label: '99.9%', sublabel: 'Uptime Guarantee', icon: 'Zap' },
  { label: '<15 min', sublabel: 'Response Time', icon: 'Clock' },
  { label: '100%', sublabel: 'Client Satisfaction', icon: 'Heart' },
  { label: '24/7', sublabel: 'Support Available', icon: 'Shield' }
];

