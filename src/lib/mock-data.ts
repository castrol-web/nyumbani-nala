// Mock data for Nyumbani Nala Admin Dashboard

// Flexible Project Structure - supports varying content per project
export interface ProjectSection {
  id: string
  title: string
  content: string
}

export interface VolunteerOpportunity {
  id: string
  title: string
  description: string
}

export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  leader: string
  leaderRole: string
  location: string
  coverImage: string
  status: "active" | "paused" | "completed"
  beneficiaries: number
  establishedYear: number
  sections: ProjectSection[]
  volunteerOpportunities: VolunteerOpportunity[]
  tags: string[]
  contactEmail?: string
  website?: string
  createdAt: string
  updatedAt: string
}


export interface Donation {
  id: string
  donorId: string
  donorName: string
  amount: number
  currency: string
  date: string
  status: "completed" | "pending" | "failed"
  method: "card" | "bank" | "mobile" | "cash"
  campaign?: string
}

export interface Donor {
  id: string
  name: string
  email: string
  phone: string
  totalDonated: number
  donationsCount: number
  lastDonation: string
  status: "active" | "inactive"
  avatar?: string
}

export interface DashboardStats {
  totalDonations: number
  totalDonors: number
  totalRaised: number
  childrenSupported: number
  monthlyGrowth: number
  averageDonation: number
}

export const mockDonations: Donation[] = [
  {
    id: "DON-001",
    donorId: "D001",
    donorName: "Sarah Kimani",
    amount: 15000,
    currency: "KES",
    date: "2026-03-28",
    status: "completed",
    method: "mobile",
    campaign: "Education Fund",
  },
  {
    id: "DON-002",
    donorId: "D002",
    donorName: "James Ochieng",
    amount: 25000,
    currency: "KES",
    date: "2026-03-27",
    status: "completed",
    method: "bank",
    campaign: "Healthcare Initiative",
  },
  {
    id: "DON-003",
    donorId: "D003",
    donorName: "Mary Wanjiku",
    amount: 5000,
    currency: "KES",
    date: "2026-03-27",
    status: "pending",
    method: "card",
    campaign: "Food Program",
  },
  {
    id: "DON-004",
    donorId: "D004",
    donorName: "Peter Mwangi",
    amount: 50000,
    currency: "KES",
    date: "2026-03-26",
    status: "completed",
    method: "bank",
    campaign: "Building Fund",
  },
  {
    id: "DON-005",
    donorId: "D005",
    donorName: "Grace Akinyi",
    amount: 10000,
    currency: "KES",
    date: "2026-03-26",
    status: "completed",
    method: "mobile",
    campaign: "Education Fund",
  },
  {
    id: "DON-006",
    donorId: "D006",
    donorName: "David Kiprop",
    amount: 7500,
    currency: "KES",
    date: "2026-03-25",
    status: "completed",
    method: "card",
    campaign: "Healthcare Initiative",
  },
  {
    id: "DON-007",
    donorId: "D001",
    donorName: "Sarah Kimani",
    amount: 12000,
    currency: "KES",
    date: "2026-03-24",
    status: "completed",
    method: "mobile",
    campaign: "Food Program",
  },
  {
    id: "DON-008",
    donorId: "D007",
    donorName: "Elizabeth Nyambura",
    amount: 30000,
    currency: "KES",
    date: "2026-03-23",
    status: "failed",
    method: "card",
    campaign: "Building Fund",
  },
]

export const mockDonors: Donor[] = [
  {
    id: "D001",
    name: "Sarah Kimani",
    email: "sarah.kimani@email.com",
    phone: "+254 712 345 678",
    totalDonated: 127000,
    donationsCount: 8,
    lastDonation: "2026-03-28",
    status: "active",
  },
  {
    id: "D002",
    name: "James Ochieng",
    email: "james.ochieng@email.com",
    phone: "+254 723 456 789",
    totalDonated: 95000,
    donationsCount: 5,
    lastDonation: "2026-03-27",
    status: "active",
  },
  {
    id: "D003",
    name: "Mary Wanjiku",
    email: "mary.wanjiku@email.com",
    phone: "+254 734 567 890",
    totalDonated: 45000,
    donationsCount: 3,
    lastDonation: "2026-03-27",
    status: "active",
  },
  {
    id: "D004",
    name: "Peter Mwangi",
    email: "peter.mwangi@email.com",
    phone: "+254 745 678 901",
    totalDonated: 250000,
    donationsCount: 12,
    lastDonation: "2026-03-26",
    status: "active",
  },
  {
    id: "D005",
    name: "Grace Akinyi",
    email: "grace.akinyi@email.com",
    phone: "+254 756 789 012",
    totalDonated: 35000,
    donationsCount: 4,
    lastDonation: "2026-03-26",
    status: "active",
  },
  {
    id: "D006",
    name: "David Kiprop",
    email: "david.kiprop@email.com",
    phone: "+254 767 890 123",
    totalDonated: 22500,
    donationsCount: 2,
    lastDonation: "2026-03-25",
    status: "inactive",
  },
  {
    id: "D007",
    name: "Elizabeth Nyambura",
    email: "elizabeth.nyambura@email.com",
    phone: "+254 778 901 234",
    totalDonated: 75000,
    donationsCount: 6,
    lastDonation: "2026-03-23",
    status: "active",
  },
]

export const mockStats: DashboardStats = {
  totalDonations: 1247,
  totalDonors: 342,
  totalRaised: 4850000,
  childrenSupported: 156,
  monthlyGrowth: 12.5,
  averageDonation: 3889,
}

export const monthlyDonationData = [
  { month: "Oct", donations: 285000, donors: 45 },
  { month: "Nov", donations: 342000, donors: 52 },
  { month: "Dec", donations: 520000, donors: 78 },
  { month: "Jan", donations: 398000, donors: 61 },
  { month: "Feb", donations: 445000, donors: 68 },
  { month: "Mar", donations: 512000, donors: 74 },
]

export const campaignData = [
  { name: "Education Fund", value: 1850000, color: "#D02752" },
  { name: "Healthcare Initiative", value: 1250000, color: "#38BDF8" },
  { name: "Food Program", value: 950000, color: "#4ADE80" },
  { name: "Building Fund", value: 800000, color: "#FBBF24" },
]

export const recentActivity = [
  {
    id: 1,
    type: "donation",
    message: "Sarah Kimani donated KES 15,000",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "donor",
    message: "New donor registered: Emmanuel Mutua",
    time: "4 hours ago",
  },
  {
    id: 3,
    type: "donation",
    message: "James Ochieng donated KES 25,000",
    time: "6 hours ago",
  },
  {
    id: 4,
    type: "milestone",
    message: "Education Fund reached KES 1.8M goal",
    time: "1 day ago",
  },
  {
    id: 5,
    type: "donation",
    message: "Peter Mwangi donated KES 50,000",
    time: "2 days ago",
  },
]
