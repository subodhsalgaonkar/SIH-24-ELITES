import { MongoClient } from 'mongodb';

// const uri = 'mongodb+srv://salgaonkarsubodh:Subodh@2004@sih-elites.zdjd4.mongodb.net/';
const uri = 'mongodb+srv://shintreaditya05:aditya@123@sih-elites.zdjd4.mongodb.net/';

let db;

export async function connectToDatabase() {
    if (db) return db; // Return the db instance if already connected

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db('your-database-name'); // Replace with your database name
        console.log('Connected to MongoDB');
        return db;
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw error;
    }
}
