import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database with IO-360-L2A parts...')

  // Create Engine Model
  const engine = await prisma.engineModel.upsert({
    where: { slug: 'io-360-l2a' },
    update: {},
    create: {
      name: 'Lycoming IO-360-L2A',
      slug: 'io-360-l2a',
      description: 'Fuel injected 360 cubic inch engine often used in Cessna 172R/S.',
    },
  })

  // Sample parts from the PDF Spares List
  const partsData = [
    { partNumber: '75439-1', description: 'SERVICE KIT SEAL AND GASKET SET', quantity: 10, remarks: '' },
    { partNumber: '18D26098', description: 'BEARING CRANKSHAFT', quantity: 40, remarks: '' },
    { partNumber: '18A26093', description: 'BEARING CRANKSHAFT', quantity: 20, remarks: '' },
    { partNumber: '18M26105', description: 'BEARING CONNECTING ROD', quantity: 80, remarks: '' },
    { partNumber: 'LW12186', description: 'NUT CONNECTING ROD', quantity: 80, remarks: '' },
    { partNumber: '75061', description: 'BOLT CONNEECTION ROD', quantity: 80, remarks: '' },
    { partNumber: '53E22144', description: 'VAVLE ASSY.(THERMOSTAT BYPASS VAVLE)', quantity: 10, remarks: '' },
    { partNumber: 'LW12892', description: 'THRUST BUTTON ROCKER SHAFT', quantity: 80, remarks: '' },
    { partNumber: 'CH48110-1', description: 'OIL FILTER', quantity: 150, remarks: '' },
    { partNumber: '05K19423S', description: 'IMPELLER KIT', quantity: 5, remarks: '' },
    { partNumber: 'MK401', description: 'Magneto OH Kit', quantity: 12, remarks: 'Engine Accessories' },
    { partNumber: 'REM-38E', description: 'Spark Plug', quantity: 200, remarks: 'Engine Accessories' },
  ]

  for (const p of partsData) {
    await prisma.part.upsert({
      where: { partNumber: p.partNumber },
      update: {
        engines: {
          connect: { id: engine.id }
        }
      },
      create: {
        partNumber: p.partNumber,
        description: p.description,
        quantity: p.quantity,
        remarks: p.remarks,
        partCategory: p.remarks === 'Engine Accessories' ? 'Accessory' : 'Engine Overhaul',
        manufacturer: 'Lycoming',
        availability: p.quantity > 20 ? 'IN_STOCK' : 'LOW_STOCK',
        condition: 'Factory New',
        engines: {
          connect: { id: engine.id }
        }
      }
    })
  }

  // Create super admin user
  const bcrypt = require('bcryptjs')
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  await prisma.user.upsert({
    where: { email: 'admin@crewworth.com' },
    update: {},
    create: {
      name: 'Super Admin',
      email: 'admin@crewworth.com',
      password: hashedPassword,
      role: 'SUPER_ADMIN',
    },
  })

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
