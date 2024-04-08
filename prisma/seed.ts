import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "b8ee6bf2-02d7-4841-9940-8a988b3bf108",
      title: "Playstation 5",
      slug: "PS5",
      details: "Um evento para eu jogar ps5",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
