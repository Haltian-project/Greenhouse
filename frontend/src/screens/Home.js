<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaThermometer, FaTint, FaRegLaughBeam, FaBalanceScale, FaCloud, FaExclamationTriangle, FaSmog } from 'react-icons/fa'; // Importing icons from FontAwesome library
import exampleData from '../exampleData'; // Importing example data
=======
import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaThermometer, FaTint, FaWind, FaSmog, FaLightbulb, FaRegLightbulb } from 'react-icons/fa'; // Importing icons from FontAwesome library
import exampleData from '../exampleData'; // Importing new example data

>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef

const Home = () => {
  // Function to get the latest data
  const getLatestData = () => {
    const latestData = {
<<<<<<< HEAD
      temperature: exampleData.temp.datasets[0].data.slice(-1)[0],
      outsideTemperature: exampleData.outsideTemp.datasets[0].data.slice(-1)[0],
      humidity: exampleData.humidity.datasets[0].data.slice(-1)[0],
      pH: exampleData.ph.datasets[0].data.slice(-1)[0],
      CO2: exampleData.co2.datasets[0].data.slice(-1)[0],
    };
    return latestData;
  };

  // Get the latest data
  const latestData = getLatestData();

  // Simulated alert state
  const alert = false;

  return (
    <div>
      {/* <h1>Home</h1>
      <button>
        <Link to="/charts">Go to Charts</Link>
=======
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
        <Link to="/charts"> Go to Charts</Link>
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
      </button>
      <button>
        <Link to="/forecast">See weather forecast</Link>
      </button>
      <button>
<<<<<<< HEAD
        <Link to="/yet-another-page">Go to Yet Another Page</Link>
      </button>

      <h1>Latest data:</h1> */}


      <div className="Home-data-container">
        <div className="Home-data-item" style={{ backgroundColor: 'lightblue' }}>
          <FaThermometer size={30} />
          <p>Temperature: {latestData.temperature} °C</p>
        </div>
        <div className="Home-data-item" style={{ backgroundColor: 'lightgreen' }}>
          <FaCloud size={30} />
          <p>Outside Temperature: {latestData.outsideTemperature} °C</p>
        </div>
        <div className="Home-data-item" style={{ backgroundColor: 'lightcoral' }}>
          <FaTint size={30} />
          <p>Humidity: {latestData.humidity} %</p>
        </div>
        <div className="Home-data-item" style={{ backgroundColor: 'lightgoldenrodyellow' }}>
          <FaBalanceScale size={30} />
          <p>pH: {latestData.pH}</p>
        </div>
        <div className="Home-data-item" style={{ backgroundColor: 'lightsalmon' }}>
          <FaSmog size={30} />
          <p>CO2: {latestData.CO2} ppm</p>
        </div>
        <div className="Home-data-container">



        <div className="Home-data-item">
          {alert ? (
            <>
              <FaExclamationTriangle size={30} color="red"/>
              <p style={{ color: 'red' }}>Possible water leak</p>
            </>
          ) : (
            <>
              <FaRegLaughBeam size={30} />
              <p>No water leak</p>
            </>
          )}
        </div>
      </div>
      {/* <h1>Alerts:</h1> */}
      
      </div>
    </div>
=======
        <Link to="/price">Electricity price</Link>
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
              <p>Light intensity: {latestData.lightIntensity} lux?</p>
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
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
  );
};

export default Home;
