import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import forecast from './routers/forecast.js';
import weather from './routers/weather.js';
import price from './routers/price.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mqtt from 'mqtt';
import fs from 'fs';
import { saveDataToMongoDB } from './utils/db.cjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);  

dotenv.config({ path: path.resolve(__dirname, '../.env') });

//require('dotenv').config()({path: `${__dirname}/../.env`});
//const mqtt = require('mqtt');
//const fs = require('fs');
//const path = require('path');
//const { saveDataToMongoDB } = require('../utils/db.cjs');

const keyPath = path.resolve(__dirname, './certificates/sales-cloudext-prfi002024oamk1.key');
const certPath = path.resolve(__dirname, './certificates/sales-cloudext-prfi002024oamk1.pem');



const app = express();
const PORT = process.env.PORT || 8000;

const URI = process.env.MongoDB_URI;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/forecast', forecast);
app.use('/weather', weather);
app.use('/price', price);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// MQTT broker URL and options
const brokerUrl = 'mqtts://a39cwxnxny8cvy.iot.eu-west-1.amazonaws.com:8883';
const options = {
    key: fs.readFileSync(keyPath), // Load the key
    cert: fs.readFileSync(certPath), // Load the certificate
    rejectUnauthorized: false,
};

// MQTT topic to subscribe to
const topic = 'cloudext/json/pr/fi/prfi002024oamk1/#'; // Topic

// Create a client instance
const client = mqtt.connect(brokerUrl, options);

// Handle connection event
client.on('connect', () => {
    console.log('Connected to MQTT broker');

    // Subscribe to the topic
    client.subscribe(topic, (err) => {
        if (err) {
            console.error('Failed to subscribe to MQTT topic:', err);
        } else {
            console.log('Subscribed to MQTT topic:', topic);
        }
    });
});

// Handle message event
client.on('message', async (topic, message) => {
    console.log('Received message:', message.toString());
    // Handle the received message here
    const data = JSON.parse(message.toString());
    await saveDataToMongoDB(data); // Call the function to save data to the database
}
);

// Handle error event
client.on('error', (err) => {
    console.error('MQTT client error:', err);
});

// Handle close event
client.on('close', () => {
    console.log('Disconnected from MQTT broker');
});
