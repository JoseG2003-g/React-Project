import { Databases } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const databse = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    //Use appwriet to check if term exists
}

