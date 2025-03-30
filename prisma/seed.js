import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current file
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load products.json from the correct location
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, "products.json"), "utf-8")
);

const prisma = new PrismaClient();

async function main() {
  try {
    for (const product of products) {
      await prisma.product.create({ data: product });
    }
    console.log("✅ Data seeded successfully!");
    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
