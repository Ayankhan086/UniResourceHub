import { PrismaClient } from "../generated/client/client.js";
import "dotenv/config";
import { generateEmbedding, formatEmbeddingForSql } from "../utils/embedding.js";

const prisma = new PrismaClient();

async function populateEmbeddings() {
    console.log("🚀 Starting improved embedding population script...");

    try {
        // 1. Handle Departments
        const departments = await prisma.department.findMany();
        console.log(`📂 Found ${departments.length} departments to process.`);

        for (const dept of departments) {
            console.log(`  Processing department: ${dept.name}`);
            const embeddingText = `Department: ${dept.name}. Tags: ${dept.tags?.join(", ") || ""}`;
            const embedding = await generateEmbedding(embeddingText);
            
            if (embedding) {
                const formattedEmbedding = formatEmbeddingForSql(embedding);
                await prisma.$executeRaw`UPDATE "Department" SET "embedding" = ${formattedEmbedding}::vector WHERE "id" = ${dept.id}`;
                console.log(`  ✅ Updated embedding for: ${dept.name}`);
            }
        }

        // 2. Handle Resources
        // We include the department to get the name for richer context
        const resources = await prisma.resource.findMany({
            include: { department: true }
        });

        console.log(`📄 Found ${resources.length} resources to process.`);

        for (const res of resources) {
            console.log(`  Processing resource: ${res.name} (${res.department.name})`);
            const embeddingText = `Resource: ${res.name}. Department: ${res.department.name}. Tags: ${res.tags?.join(", ") || ""}`;
            const embedding = await generateEmbedding(embeddingText);
            
            if (embedding) {
                const formattedEmbedding = formatEmbeddingForSql(embedding);
                await prisma.$executeRaw`UPDATE "Resource" SET "embedding" = ${formattedEmbedding}::vector WHERE "id" = ${res.id}`;
                console.log(`  ✅ Updated embedding for: ${res.name}`);
            }
        }

        console.log("✨ All embeddings have been updated with richer context!");

    } catch (error) {
        console.error("Critical error in population script:", error);
    } finally {
        await prisma.$disconnect();
    }
}

populateEmbeddings();
