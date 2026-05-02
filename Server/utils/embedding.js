import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing from environment variables");
}

// Initialize the Google GenAI SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Generates an embedding for the given text using the new @google/genai SDK.
 * Returns an array of 768 floating point numbers (for gemini-embedding-001).
 */
export const generateEmbedding = async (text) => {
    try {
        if (!text || typeof text !== "string") {
            throw new Error("Invalid text provided for embedding");
        }

        const result = await ai.models.embedContent({
            model: "gemini-embedding-001",
            contents: [{ parts: [{ text }] }],
            config: { outputDimensionality: 768 }
        });

        // The new SDK returns embeddings in a slightly different structure
        const embedding = result.embeddings[0].values;
        console.log(`Generated embedding for text "${text.substring(0, 20)}...": length ${embedding.length}`);
        return embedding;
    } catch (error) {
        console.error("Error generating embedding with @google/genai:", error);
        return null;
    }
};

/**
 * Formats an array of numbers into a string format that PostgreSQL pgvector understands:
 * '[0.1, 0.2, 0.3, ...]'
 */
export const formatEmbeddingForSql = (embedding) => {
    if (!embedding || !Array.isArray(embedding)) return null;
    return `[${embedding.join(",")}]`;
};
