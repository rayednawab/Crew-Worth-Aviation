import { NextResponse } from 'next/server'

// Sample hardcoded catalog data since Vercel Serverless functions 
// cannot read local SQLite files (dev.db)
const MOCK_PARTS = [
  {
    id: "1",
    partNumber: "LEAP-1B-BLADE",
    description: "CFM LEAP-1B Fan Blade Set",
    manufacturer: "CFM International",
    availability: "IN_STOCK",
    engines: [{ name: "LEAP-1B", slug: "leap-1b" }]
  },
  {
    id: "2",
    partNumber: "CFM56-7B-HPT",
    description: "High Pressure Turbine Blade",
    manufacturer: "CFM International",
    availability: "LOW_STOCK",
    engines: [{ name: "CFM56-7B", slug: "cfm56-7b" }]
  },
  {
    id: "3",
    partNumber: "V2500-A5-FUEL",
    description: "Fuel Metering Unit (FMU)",
    manufacturer: "Woodward",
    availability: "IN_STOCK",
    engines: [{ name: "V2500", slug: "v2500" }]
  },
  {
    id: "4",
    partNumber: "PW1000G-BEAR",
    description: "Main Shaft Bearing Assembly",
    manufacturer: "Pratt & Whitney",
    availability: "OUT_OF_STOCK",
    engines: [{ name: "PW1000G", slug: "pw1000g" }]
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = (searchParams.get('q') || '').toLowerCase()
  
  // Filter mock data based on search query
  const parts = MOCK_PARTS.filter(part => {
    return part.partNumber.toLowerCase().includes(query) ||
           part.description.toLowerCase().includes(query) ||
           part.manufacturer.toLowerCase().includes(query) ||
           part.engines.some(e => e.name.toLowerCase().includes(query));
  });

  return NextResponse.json(parts)
}
