import { Client, ID, Query, Databases } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const API_KEY = import.meta.env.VITE_APPWRITE_API_KEY;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // API Endpoint from settings
  .setProject(PROJECT_ID); // Your project ID

const database = new Databases(client);

export const updateSearchCount = async (search, movie) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("search", search),
    ]);

    if (result.documents.length > 0) {
      const doc = result.documents[0];
      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        search,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error("Appwrite error:", error.message || error);

    // Provide specific guidance based on error type
    if (error.message && error.message.includes("Failed to fetch")) {
      console.error(
        "Network issue: Check your internet connection and ensure Appwrite service is accessible"
      );
      console.error(
        "Also verify CORS settings in your Appwrite console for localhost:5173"
      );
    }

    // Don't throw the error - let the app continue working
  }
};
