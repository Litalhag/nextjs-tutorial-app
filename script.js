// test-db.js

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const tasks = await prisma.task.findMany()
  console.log('✅ Tasks:', tasks)
}

main()
  .catch((e) => {
    console.error('❌ Error querying DB:', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
