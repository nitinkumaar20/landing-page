import { NextResponse } from 'next/server'

const universities = [
  {
    name: 'Alpha International University',
    courses: [
      { name: 'B.Tech', fee: '₹1,20,000 - ₹1,80,000/year' },
      { name: 'MBA', fee: '₹2,00,000 - ₹3,00,000/year' },
      { name: 'BSc', fee: '₹60,000 - ₹90,000/year' }
    ],
    placements: '95% placement rate',
    facilities: ['Hostel','Library','Labs']
  },
  {
    name: 'Beta Global University',
    courses: [
      { name: 'BCA', fee: '₹70,000 - ₹1,00,000/year' },
      { name: 'MCA', fee: '₹1,20,000 - ₹1,60,000/year' },
      { name: 'BBA', fee: '₹80,000 - ₹1,20,000/year' }
    ],
    placements: '90% placement rate',
    facilities: ['Cafeteria','Wi-Fi','Sports']
  }
]

export async function GET() {
  return NextResponse.json(universities)
}
