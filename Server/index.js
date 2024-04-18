import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import forecast from './routers/forecast.js';
import weather from './routers/weather.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 8000;

const URI = process.env.MongoDB_URI;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/forecast', forecast);
app.use('/weather', weather);

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

