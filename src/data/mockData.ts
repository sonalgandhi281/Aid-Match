export type DonationType = 'Food' | 'Clothes' | 'Medicines' | 'Money' | 'Animal Feed' | 'Emergency Rescue Support';

export const DONATION_TYPES: DonationType[] = [
  'Food',
  'Clothes',
  'Medicines',
  'Money',
  'Animal Feed',
  'Emergency Rescue Support',
];

export interface NGORequirement {
  id: string;
  ngoName: string;
  category: string;
  location: string;
  currentRequirement: string;
  urgencyLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  acceptedDonations: DonationType[];
  donation: {
    purpose: string;
    amountRequired: number;
    amountFunded: number;
    status: 'Open' | 'In Progress' | 'Fulfilled';
  };
}

export const mockNGOs: NGORequirement[] = [
  {
    id: '1',
    ngoName: 'Hope Foundation',
    category: 'Education',
    location: 'Mumbai, India',
    currentRequirement: '200 school bags for underprivileged children',
    urgencyLevel: 'High',
    acceptedDonations: ['Money', 'Clothes'],
    donation: {
      purpose: 'School supplies for 200 students starting new academic year',
      amountRequired: 50000,
      amountFunded: 32000,
      status: 'In Progress',
    },
  },
  {
    id: '2',
    ngoName: 'Green Earth Initiative',
    category: 'Environment',
    location: 'Delhi, India',
    currentRequirement: '500 saplings for urban plantation drive',
    urgencyLevel: 'Medium',
    acceptedDonations: ['Money'],
    donation: {
      purpose: 'Urban greening project in residential areas',
      amountRequired: 25000,
      amountFunded: 25000,
      status: 'Fulfilled',
    },
  },
  {
    id: '3',
    ngoName: 'Meals for All',
    category: 'Food & Hunger',
    location: 'Bangalore, India',
    currentRequirement: 'Daily meals for 150 homeless individuals',
    urgencyLevel: 'Critical',
    acceptedDonations: ['Food', 'Money'],
    donation: {
      purpose: 'Emergency food supplies for homeless shelter',
      amountRequired: 75000,
      amountFunded: 18000,
      status: 'Open',
    },
  },
  {
    id: '4',
    ngoName: 'Health First',
    category: 'Healthcare',
    location: 'Chennai, India',
    currentRequirement: 'Medical equipment for rural health camp',
    urgencyLevel: 'High',
    acceptedDonations: ['Medicines', 'Money'],
    donation: {
      purpose: 'Basic diagnostic equipment for 3-day health camp',
      amountRequired: 40000,
      amountFunded: 28000,
      status: 'In Progress',
    },
  },
  {
    id: '5',
    ngoName: 'Shelter Hope',
    category: 'Housing',
    location: 'Kolkata, India',
    currentRequirement: 'Building materials for 10 temporary shelters',
    urgencyLevel: 'Medium',
    acceptedDonations: ['Money', 'Clothes', 'Emergency Rescue Support'],
    donation: {
      purpose: 'Temporary housing for flood-affected families',
      amountRequired: 100000,
      amountFunded: 45000,
      status: 'In Progress',
    },
  },
  {
    id: '6',
    ngoName: 'Paws & Claws Rescue',
    category: 'Animal Welfare',
    location: 'Pune, India',
    currentRequirement: 'Food and medical supplies for rescued animals',
    urgencyLevel: 'High',
    acceptedDonations: ['Animal Feed', 'Medicines', 'Money'],
    donation: {
      purpose: 'Emergency care for 50 rescued street animals',
      amountRequired: 35000,
      amountFunded: 12000,
      status: 'Open',
    },
  },
  {
    id: '7',
    ngoName: 'Disaster Relief Corps',
    category: 'Emergency Response',
    location: 'Hyderabad, India',
    currentRequirement: 'Emergency rescue equipment and supplies',
    urgencyLevel: 'Critical',
    acceptedDonations: ['Emergency Rescue Support', 'Food', 'Medicines', 'Money'],
    donation: {
      purpose: 'Flood rescue operations in affected districts',
      amountRequired: 150000,
      amountFunded: 45000,
      status: 'In Progress',
    },
  },
];
