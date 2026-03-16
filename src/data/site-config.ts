export const siteConfig = {
  businessName: 'Odds & Ends Handyman Service',
  shortName: 'Odds & Ends',
  tagline: 'Your Trusted Rockland County Handyman Since 2001',
  phone: '9084612688',
  phoneFormatted: '(908) 461-2688',
  email: 'Dkiely@oddsandendshandymanservice.com',
  owner: 'Daniel Kiely',
  ownerFirstName: 'Dan',
  established: 2001,
  yearsExperience: 20,
  county: 'Rockland County',
  state: 'New York',
  stateAbbr: 'NY',
  freeEstimates: true,
  textingPreferred: true,
  url: 'https://oddsandendshandymanservice.com',
  logo: '/images/logo.png',
  address: {
    county: 'Rockland County',
    state: 'New York',
    stateAbbr: 'NY',
  },
  social: {
    google: '',
    facebook: '',
    yelp: '',
  },
  hours: {
    weekdays: '7:00 AM - 6:00 PM',
    saturday: '8:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
  excludedServices: [
    'Roofing',
    'Major electrical',
    'Large remodels',
  ],
} as const

export type SiteConfig = typeof siteConfig
