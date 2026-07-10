import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || ''
  
  // Enterprise-grade fast search
  const parts = await prisma.part.findMany({
    where: {
      OR: [
        { partNumber: { contains: query } },
        { description: { contains: query } },
        { manufacturer: { contains: query } },
        {
          engines: {
            some: {
              OR: [
                { name: { contains: query } },
                { slug: { contains: query } }
              ]
            }
          }
        }
      ]
    },
    include: {
      engines: true
    },
    orderBy: {
      partNumber: 'asc'
    },
    take: 100 // Limit results for speed, pagination can be added later
  })

  return NextResponse.json(parts)
}
