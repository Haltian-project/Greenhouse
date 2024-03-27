import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaThermometer, FaTint, FaRegLaughBeam, FaBalanceScale, FaCloud, FaExclamationTriangle, FaSmog } from 'react-icons/fa'; // Tuodaan ikonit FontAwesome-kirjastosta
import exampleData from '../exampleData'; // Tuodaan esimerkkidata

const Home = () => {
  // Funktio viimeisimmän datan hakemiseen
  const getLatestData = () => {
    const latestData = {
      temperature: exampleData.temp.datasets[0].data.slice(-1)[0],
      outsideTemperature: exampleData.outsideTemp.datasets[0].data.slice(-1)[0],
      humidity: exampleData.humidity.datasets[0].data.slice(-1)[0],
      pH: exampleData.ph.datasets[0].data.slice(-1)[0],
      CO2: exampleData.co2.datasets[0].data.slice(-1)[0],
    };
    return latestData;
  };

  // Haetaan viimeisimmät tiedot
  const latestData = getLatestData();

  // Simuloitu hälytystila
  const alert = true;

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
      <div className="Home-data-container">
        <div className="Home-data-item">
          <FaThermometer size={30} />
          <p>Temperature: {latestData.temperature} °C</p>
        </div>
        <div className="Home-data-item">
          <FaCloud size={30} />
          <p>Outside Temperature: {latestData.outsideTemperature} °C</p>
        </div>
        <div className="Home-data-item">
          <FaTint size={30} />
          <p>Humidity: {latestData.humidity} %</p>
        </div>
        <div className="Home-data-item">
          <FaBalanceScale size={30} />
          <p>pH: {latestData.pH}</p>
        </div>
        <div className="Home-data-item">
          <FaSmog size={30} />
          <p>CO2: {latestData.CO2} ppm</p>
        </div>
      </div>
      <h1>Alerts:</h1>
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
              <p>No alerts</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
