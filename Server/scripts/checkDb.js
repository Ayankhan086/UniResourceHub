import { PrismaClient } from "../generated/client/client.js";
import "dotenv/config";

const prisma = new PrismaClient();

async function checkResources() {
    const resources = await prisma.resource.findMany({
        select: { name: true, tags: true, departmentId: true }
    });
    console.log("Total resources:", resources.length);
    console.log("Sample resources:", resources.slice(0, 10));
    
    const dbResources = resources.filter(r => r.name.toLowerCase().includes("database") || r.tags.some(t => t.toLowerCase().includes("database")));
    console.log("Resources matching 'database':", dbResources);
    
    await prisma.$disconnect();
}

checkResources();
