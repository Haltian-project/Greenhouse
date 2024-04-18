import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaThermometer, FaTint, FaWind, FaSmog, FaLightbulb, FaRegLightbulb } from 'react-icons/fa'; // Importing icons from FontAwesome library
import exampleData from '../exampleData'; // Importing new example data


const Home = () => {
  // Function to get the latest data
  const getLatestData = () => {
    const latestData = {
      temperature: exampleData.insideTemperature.datasets[0].data.slice(-1)[0],
      humidity: exampleData.insideHumidity.datasets[0].data.slice(-1)[0],
      CO2: exampleData.co2.datasets[0].data.slice(-1)[0],
      insideAirpressure: exampleData.insideAirPressure.datasets[0].data.slice(-1)[0],
      light: exampleData.light.datasets[0].data.slice(-1)[0],
      lightIntensity: exampleData.lightIntensity.datasets[0].data.slice(-1)[0],
    };
    return latestData;
  };
  // Get the latest data
  const latestData = getLatestData();

  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
    
         const response = await fetch(
            `http://localhost:8000/weather`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchData();

  }, []);
  
  
  return (
    <div>
     <h1>Home</h1>
      <button>
        <Link to="/charts">Go to Charts</Link>
      </button>
      <button>
        <Link to="/forecast">See weather forecast</Link>
      </button>
      <button>
        <Link to="/yet-another-page">Go to Yet Another Page</Link>
      </button>

      <h1>Latest data:</h1> 

      <h2>Inside:</h2> 
      <div className="Home-data-container">
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaThermometer size={30} />
              <p>Inside Temperature: {latestData.temperature} °C</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaTint size={30} />
              <p>Inside Humidity: {latestData.humidity} %</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaSmog size={30} />
              <p>CO2: {latestData.CO2} ppm</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaWind size={30} />
              <p>Inside Airpressure: {latestData.insideAirpressure} hpa</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaLightbulb size={30} />
              <p>Light: {latestData.light} lx?</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaRegLightbulb size={30} />
              <p>Light intensity: {latestData.lightIntensity} cd/m^2?</p>
            </Link>
          </button>
        </div>
      </div>

      <h2>Outside:</h2>
<div className="Home-data-container">
  <div className="Home-data-item">
    <button>
      <Link to="/forecast">
        <FaThermometer size={30} />
        <p>Outside Temperature: {weatherData ? weatherData.main.temp : 'Loading...'} °C</p>
      </Link>
    </button>
  </div>
  <div className="Home-data-item">
    <button>
      <Link to="/forecast">
        <FaTint size={30} />
        <p>Outside Humidity: {weatherData ? weatherData.main.humidity : 'Loading...'} %</p>
      </Link>
    </button>
  </div>
  <div className="Home-data-item">
    <button>
      <Link to="/forecast">
        <FaWind size={30} />
        <p>Outside Airpressure: {weatherData ? weatherData.main.pressure : 'Loading...'} hpa</p>
      </Link>
    </button>
  </div>
</div>
    </div>
  );
};

export default Home;
