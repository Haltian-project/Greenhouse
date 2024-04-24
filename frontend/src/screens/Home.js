import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaThermometer, FaTint, FaWind, FaSmog, FaLightbulb, FaRegLightbulb, FaCloudSunRain, FaBolt, FaChartLine } from 'react-icons/fa'; // Importing icons from FontAwesome library

const Home = () => {
  // State for sensor data and its limits
  const [sensorData, setSensorData] = useState(null);
  const [isTempLimits, setIsTempLimits] = useState(true);
  const [isHumdLimits, setIsHumdLimits] = useState(true);
  const [isCarbonDioxideLimits, setIsCarbonDioxideLimits] = useState(true);
  const [isAirPressureLimits, setIsAirPressureLimits] = useState(true);
  const [isLightLimits, setIsLightLimits] = useState(true);
  const [isLightIntensityLimits, setIsLightIntensityLimits] = useState(true);
  
  // State for sensor data limits
  const [limits, setLimits] = useState({
    tempMin: 0,
    tempMax: 0,
    humdMin: 0,
    humdMax: 0,
    carbonDioxideMin: 0,
    carbonDioxideMax: 0,
    airPressureMin: 0,
    airPressureMax: 0,
    lightMin: 0,
    lightMax: 0,
    lightIntensityMin: 0,
    lightIntensityMax: 0,
  });

  // Function to check if sensor data is within limits
  const checkDataLimits = useCallback((data) => {
    setIsTempLimits(data.temp >= limits.tempMin && data.temp <= limits.tempMax);
    setIsHumdLimits(data.humd >= limits.humdMin && data.humd <= limits.humdMax);
    setIsCarbonDioxideLimits(data.carbonDioxide >= limits.carbonDioxideMin && data.carbonDioxide <= limits.carbonDioxideMax);
    setIsAirPressureLimits(data.airp >= limits.airPressureMin && data.airp <= limits.airPressureMax);
    setIsLightLimits(data.lght >= limits.lightMin && data.lght <= limits.lightMax);
    setIsLightIntensityLimits(data.lghtint >= limits.lightIntensityMin && data.lghtint <= limits.lightIntensityMax);
  }, [limits]);
  
  // Fetch sensor data limits from backend API
  useEffect(() => {
    const fetchLimits = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/limits`);
        const data = await response.json();
        setLimits(data);
      } catch (error) {
        console.error('Error fetching limits:', error);
      }
    };

    fetchLimits();
  }, []);

  // Fetch sensor data from backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/getdata`);
        const data = await response.json();
        setSensorData(data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchData();
  }, []);

  // Fetch weather data
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/weather`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);
 
  // Check sensor data limits when sensorData or limits change
  useEffect(() => {
    if (sensorData) {
      checkDataLimits(sensorData);
    }
  }, [sensorData, limits, checkDataLimits]);
  

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
    <div className={`Home-data-item ${isTempLimits ? '' : 'data-out-of-limits'}`}>
      {isTempLimits ? (
        <button className={`Home-data-button ${isTempLimits ? '' : 'data-out-of-limits'}`}>
          <Link to="/charts">
            <FaThermometer size={30} />
            <p>Inside Temperature: {sensorData.temp} °C</p>
          </Link>
        </button>
      ) : (
        <Link to="/log">
          <button className={`Home-data-button ${isTempLimits ? '' : 'data-out-of-limits'}`}>
            <FaThermometer size={30} />
            <p>Inside Temperature out of limits: {sensorData.temp} °C</p>
          </button>
        </Link>
      )}
    </div>
    <div className={`Home-data-item ${isHumdLimits ? '' : 'data-out-of-limits'}`}>
      {isHumdLimits ? (
        <button className={`Home-data-button ${isHumdLimits ? '' : 'data-out-of-limits'}`}>
          <Link to="/charts">
            <FaTint size={30} />
            <p>Inside Humidity: {sensorData.humd} %</p>
          </Link>
        </button>
      ) : (
        <Link to="/log">
          <button className={`Home-data-button ${isHumdLimits ? '' : 'data-out-of-limits'}`}>
            <FaTint size={30} />
            <p>Inside Humidity out of limits: {sensorData.humd} %</p>
          </button>
        </Link>
      )}
    </div>
    <div className={`Home-data-item ${isCarbonDioxideLimits ? '' : 'data-out-of-limits'}`}>
      {isCarbonDioxideLimits ? (
        <button className={`Home-data-button ${isCarbonDioxideLimits ? '' : 'data-out-of-limits'}`}>
          <Link to="/charts">
            <FaSmog size={30} />
            <p>CO2: {sensorData.carbonDioxide} ppm</p>
          </Link>
        </button>
      ) : (
        <Link to="/log">
          <button className={`Home-data-button ${isCarbonDioxideLimits ? '' : 'data-out-of-limits'}`}>
            <FaSmog size={30} />
            <p>CO2 out of limits: {sensorData.carbonDioxide} ppm</p>
          </button>
        </Link>
      )}
    </div>
    <div className={`Home-data-item ${isAirPressureLimits ? '' : 'data-out-of-limits'}`}>
      {isAirPressureLimits ? (
        <button className={`Home-data-button ${isAirPressureLimits ? '' : 'data-out-of-limits'}`}>
          <Link to="/charts">
            <FaWind size={30} />
            <p>Inside Airpressure: {sensorData.airp} pa</p>
          </Link>
        </button>
      ) : (
        <Link to="/log">
          <button className={`Home-data-button ${isAirPressureLimits ? '' : 'data-out-of-limits'}`}>
            <FaWind size={30} />
            <p>Inside Airpressure out of limits: {sensorData.airp} pa</p>
          </button>
        </Link>
      )}
    </div>
    <div className={`Home-data-item ${isLightLimits ? '' : 'data-out-of-limits'}`}>
      {isLightLimits ? (
        <button className={`Home-data-button ${isLightLimits ? '' : 'data-out-of-limits'}`}>
          <Link to="/charts">
            <FaLightbulb size={30} />
            <p>Light: {sensorData.lght} lux</p>
          </Link>
        </button>
      ) : (
        <Link to="/log">
          <button className={`Home-data-button ${isLightLimits ? '' : 'data-out-of-limits'}`}>
            <FaLightbulb size={30} />
            <p>Light out of limits: {sensorData.lght} lux</p>
          </button>
        </Link>
      )}
    </div>
    <div className={`Home-data-item ${isLightIntensityLimits ? '' : 'data-out-of-limits'}`}>
      {isLightIntensityLimits ? (
        <button className={`Home-data-button ${isLightIntensityLimits ? '' : 'data-out-of-limits'}`}>
          <Link to="/charts">
            <FaRegLightbulb size={30} />
            <p>Light intensity: {sensorData.lghtint} lux</p>
          </Link>
        </button>
      ) : (
        <Link to="/log">
          <button className={`Home-data-button ${isLightIntensityLimits ? '' : 'data-out-of-limits'}`}>
            <FaRegLightbulb size={30} />
            <p>Light intensity out of limits: {sensorData.lghtint} lux</p>
          </button>
        </Link>
      )}
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
