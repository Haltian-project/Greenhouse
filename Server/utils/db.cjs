require('dotenv').config({ path: `${__dirname}/../.env` });
const { MongoClient } = require('mongodb');

const mongoURI = process.env.MongoDB_URI;
const dbName = 'mqtt_data';

async function saveDataToMongoDB(data) {
    try {
        const client = await MongoClient.connect(mongoURI);
        const db = client.db(dbName);
        const collection = db.collection('data');

        await collection.insertOne(data);
        console.log('Data saved to MongoDB');

        client.close();
    } catch (err) {
        console.error('Error saving data to MongoDB:', err);
    }
}

module.exports = { saveDataToMongoDB };
