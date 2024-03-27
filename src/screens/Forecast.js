import React, { useState, useEffect } from 'react';
import '../App.css'; 

const Forecast = () => {
  const [forecastData, setForecastData] = useState(null);

  const apiKey = 'dd8e3a1525d8c554ba445de6cd6460cd';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?id=643492&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching weather forecast:', error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}.${month}.  ${hours}:${minutes}`;
  };

  return (
    <div className="forecast-container">
      <h2 className="forecast-heading">Weather Forecast</h2>
      {forecastData ? (
        <div>
          {forecastData.city ? (
            <div>
              <p className="forecast-city">City: {forecastData.city.name}</p>
              <p className="forecast-country">Country: {forecastData.city.country}</p>
            </div>
          ) : (
            <p>City information not available</p>
          )}
          <h3 className="forecast-subheading">Forecast:</h3>
          <ul className="forecast-list">
            {forecastData.list && forecastData.list.map((item, index) => (
              <li key={index} className="forecast-item">
                {formatDate(item.dt_txt)}:  Temperature: {item.main.temp} °C, Humidity: {item.main.humidity}%, Weather: {item.weather[0].description}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Forecast;
