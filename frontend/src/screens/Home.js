import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaThermometer, FaTint, FaWind, FaSmog, FaLightbulb, FaRegLightbulb, FaCloudSunRain, FaBolt, FaChartLine } from 'react-icons/fa'; // Importing icons from FontAwesome library

const Home = () => {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch sensor data from backend API
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/getdata`);
        const data = await response.json();
        setSensorData(data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchData();
  }, []);

  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
    
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/weather`);
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
       <Link to="/charts"><FaChartLine/> Go to Charts</Link>
      </button>
      <button>
        <Link to="/forecast"><FaCloudSunRain/> See weather forecast</Link>
      </button>
      <button>
       <Link to="/price"><FaBolt/> Electricity price</Link>
      </button>

      <h1>Latest data:</h1> 

      <h2>Inside:</h2> 
      {sensorData && (
      <div className="Home-data-container">
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaThermometer size={30} />
              <p>Inside Temperature: {sensorData.temp} °C</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaTint size={30} />
              <p>Inside Humidity: {sensorData.humd} %</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaSmog size={30} />
              <p>CO2: {sensorData.carbonDioxide} ppm</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaWind size={30} />
              <p>Inside Airpressure: {sensorData.airp} pa</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaLightbulb size={30} />
              <p>Light: {sensorData.lght} k lux</p>
            </Link>
          </button>
        </div>
        <div className="Home-data-item" >
          <button>
            <Link to="/charts">
              <FaRegLightbulb size={30} />
              <p>Light intensity: {sensorData.lghtint} lux?</p>
            </Link>
          </button>
        </div>
      </div>
      )}

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
