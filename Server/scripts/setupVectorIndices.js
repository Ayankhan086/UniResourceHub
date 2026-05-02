import { PrismaClient } from "../generated/client/client.js";
import "dotenv/config";

const prisma = new PrismaClient();

async function setupIndices() {
    console.log("🛠️  Setting up advanced vector indices (HNSW)...");
    try {
        // Create HNSW index for Resources
        console.log("  Creating HNSW index for Resource table...");
        await prisma.$executeRawUnsafe(`
            CREATE INDEX IF NOT EXISTS resource_embedding_hnsw_idx 
            ON "Resource" 
            USING hnsw (embedding vector_cosine_ops);
        `);

        // Create HNSW index for Departments
        console.log("  Creating HNSW index for Department table...");
        await prisma.$executeRawUnsafe(`
            CREATE INDEX IF NOT EXISTS department_embedding_hnsw_idx 
            ON "Department" 
            USING hnsw (embedding vector_cosine_ops);
        `);

        console.log("✅ Vector indices created successfully!");
    } catch (error) {
        console.error("❌ Failed to create indices:", error.message);
        console.log("Note: This might fail if your pgvector version is older than 0.5.0 or if the index already exists under a different name.");
    } finally {
        await prisma.$disconnect();
    }
}

setupIndices();
