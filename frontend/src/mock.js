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
    id: 'essential',
    name: 'SMB Essential',
    description: 'Perfect for small businesses',
    priceRange: '$1,500 - $3,000',
    features: [
      'Helpdesk Support',
      'Basic Security Monitoring',
      'Cloud Email Support',
      'Monthly Reporting'
    ],
    recommended: false
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses',
    priceRange: '$3,000 - $6,000',
    features: [
      '24×7 Network Support',
      'MDR & EDR Solutions',
      'Cloud Management',
      'Quarterly IT Strategy Reviews',
      'Priority Support'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Compliant',
    description: 'For large organizations',
    priceRange: '$6,000+',
    features: [
      'SOC 24×7 Monitoring',
      'AI Threat Detection',
      'Dedicated Account Manager',
      'Custom IT Strategy',
      'Compliance Management',
      'White-glove Service'
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
  { label: '98%', sublabel: 'Client Satisfaction', icon: 'Heart' },
  { label: '24/7', sublabel: 'Support Available', icon: 'Shield' }
];
