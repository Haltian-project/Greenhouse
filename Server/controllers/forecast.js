import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

<<<<<<< HEAD:index.js



app.get('/',(req,res) =>{
    res.json('This is forecast')
})



app.listen(PORT, () => console.log(`Server running on port ${8000}`));

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@haltian.6zshdbe.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const Item = require("./models/Item"); // Create the Item model

app.get("/db/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});


app.get('/forecast',(req,res) =>{
=======
export const getForecast = (req,res) =>{
>>>>>>> a10928a9fef6526604c548c2cfc3575f7c4c191b:Server/controllers/forecast.js
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
<<<<<<< HEAD:index.js
})






app.listen(5000, ()=> console.log(`Server is running on ${PORT}`))
=======
}
>>>>>>> a10928a9fef6526604c548c2cfc3575f7c4c191b:Server/controllers/forecast.js
