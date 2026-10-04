import { MongoClient } from "mongodb";

export default function getMongoClient() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not configured.");
  if (!globalThis.__portfolioMongoClient) {
    const client = new MongoClient(process.env.MONGODB_URI);
    const connection = client.connect().catch((error) => {
      if (globalThis.__portfolioMongoClient === connection) {
        globalThis.__portfolioMongoClient = null;
      }
      throw error;
    });
    globalThis.__portfolioMongoClient = connection;
  }
  return globalThis.__portfolioMongoClient;
}
