require('dotenv').config({ path: `${__dirname}/../.env` });
const { MongoClient } = require('mongodb');

const mongoURL = process.env.MongoDB_URL;
const dbName = 'mqtt_data';

async function saveDataToMongoDB(data) {
    try {
        const client = await MongoClient.connect(mongoURL);
        const db = client.db(dbName);
        const collection = db.collection('data');

        await collection.insertOne(data);
        console.log('Data saved to MongoDB:', data);

        client.close();
    } catch (err) {
        console.error('Error saving data to MongoDB:', err);
    }
}

module.exports = { saveDataToMongoDB };
