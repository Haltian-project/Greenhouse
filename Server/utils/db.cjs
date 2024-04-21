require('dotenv').config({ path: `${__dirname}/../.env` });
const { MongoClient } = require('mongodb');

// MongoDB database settings
const mongoURI = process.env.MongoDB_URI;
const dbName = 'mqtt_data';

// Function to save data to MongoDB database
async function saveDataToMongoDB(data) {
    try {
        const client = await MongoClient.connect(mongoURI);
        const db = client.db(dbName);
        const collection = db.collection('sensor_data'); // Collection name: sensor_data
 // Create a document containing the desired values
 const document = {};

 // Add temperature if available
 if (data.temp) {
     document.temp = data.temp;
 }

 // Add humidity if available
 if (data.humd) {
     document.humd = data.humd;
 }

 // Add carbon dioxide level if available
 if (data.carbonDioxide) {
     document.carbonDioxide = data.carbonDioxide;
 }

 // Add air pressure if available
 if (data.airp) {
     document.airp = data.airp;
 }

 // Add light level if available
 if (data.lght) {
     document.lght = data.lght;
 }

 // Add light intensity if available
 if (data.lghtint) {
     document.lghtint = data.lghtint;
 }

 // Insert the document into the collection if it has at least one value
 if (Object.keys(document).length > 0) {
     await collection.insertOne(document);
     console.log('Data saved to MongoDB');
 } else {
     console.log('No valid data to save');
 }
        // Close the database connection
        client.close();
    } catch (err) {
        console.error('Error saving data to MongoDB:', err);
    }
}

module.exports = { saveDataToMongoDB };
