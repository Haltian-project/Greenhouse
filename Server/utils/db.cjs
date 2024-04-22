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

  if (Object.keys(document).length > 0) {
            const options = { timeZone: 'Europe/Helsinki' };
            document.timestamp = new Date().toLocaleString('fi-FI', options);
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

//function to get data from MongoDB
async function getDataFromMongoDB() {
    try {
        const client = await MongoClient.connect(mongoURI);
        const db = client.db(dbName);
        const collection = db.collection('sensor_data');

        // Query to find the 10 latest documents with the desired fields
        const query = {
            $or: [
                { temp: { $exists: true } },
                { carbonDioxide: { $exists: true } },
                { humd: { $exists: true } },
                { airp: { $exists: true } },
                { lghtint: { $exists: true } },
                { lght: { $exists: true } }
            ]
        };

        // Sort by descending order of insertion (_id) to get the latest documents first
        const options = { sort: { _id: -1 }, limit: 25 };

        // Find the 20 latest documents
        const latestDocuments = await collection.find(query, options).toArray();
        let latestData = {};

        // Loop through each field and find the latest value
        const fields = ['temp', 'carbonDioxide', 'humd', 'airp', 'lghtint', 'lght'];
        fields.forEach(field => {
            // Find the latest value for the field
            const latestValue = findLatestValue(latestDocuments, field);
            latestData[field] = latestValue;
        });

        // Close the database connection
        client.close();

        console.log('Data obtained');

        return latestData;
    } catch (err) {
        console.error('Error getting data from MongoDB:', err);
        return null;
    }
}

// Helper function to find the latest value for a field
function findLatestValue(documents, field) {
    let latestValue = null;
    for (const doc of documents) {
        if (doc[field] !== undefined) {
            latestValue = doc[field];
            break;
        }
    }
    return latestValue;
}

module.exports = { saveDataToMongoDB, getDataFromMongoDB };
