import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import forecast from './routers/forecast.js';
import weather from './routers/weather.js';
import price from './routers/price.js';
import mongoose from 'mongoose';
import { client } from './services/mqtt.cjs';

const app = express();
const PORT = process.env.PORT || 8000;

const URI = process.env.MongoDB_URI;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/forecast', forecast);
app.use('/weather', weather);
app.use('/price', price);

// MQTT client
client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
