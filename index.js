const PORT = 5000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require ('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())




app.get('/',(req,res) =>{
    res.json('hi')
})


app.get('/forecast',(req,res) =>{
    const fetchData = async () => {
        try {
          const apiKey = process.env.OPENWEATHER_API_KEY; // Store your API key in environment variables
           
          const response = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?id=643492&appid=${apiKey}&units=metric`
          );
          const data = await response.json();
          res.json(data);
        } catch (error) {
          console.error('Error fetching weather forecast:', error);
          res.status(500).json({ error: 'Failed to fetch weather forecast' }); // Handle errors and send an appropriate response
        }
      };
  
      fetchData();
})






app.listen(5000, ()=> console.log(`Server is running on port ${PORT}`))