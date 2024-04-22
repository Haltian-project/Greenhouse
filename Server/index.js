import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import forecast from './routers/forecast.js';
<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from 'dotenv';
=======
import weather from './routers/weather.js';
import price from './routers/price.js';
import mongoose from 'mongoose';
import { client } from './services/mqtt.cjs';
import sensorData from './routers/sensorData.js';
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef

const app = express();
const PORT = process.env.PORT || 8000;

const URI = process.env.MongoDB_URI;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

<<<<<<< HEAD
app.use('/forecast', forecast);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
=======

app.use('/forecast', forecast);
app.use('/weather', weather);
app.use('/price', price);
app.use('/sensorData', sensorData);

// MQTT client
client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

mongoose
  .connect(URI)
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
<<<<<<< HEAD

=======
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
