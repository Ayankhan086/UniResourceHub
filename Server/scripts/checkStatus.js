import { PrismaClient } from "../generated/client/client.js";
import "dotenv/config";

const prisma = new PrismaClient();

async function checkStatus() {
    const resource = await prisma.resource.findFirst({
        where: { name: { contains: "Data warehousing" } }
    });
    console.log("Resource:", resource?.name, "Status:", resource?.publishStatus);
    await prisma.$disconnect();
}

checkStatus();
