import { Databases, ID, Query, Client } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const databse = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    //Use appwriet to check if term exists
    try{
        const result = await databse.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.equal('searchTerm', searchTerm),])
        if(result.documents.length > 0){
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1,
            })

            //If it doesnt then create new document
        }else{
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
            })
        }
    }catch(error){

    }
}

