import React, { useState, useEffect } from 'react';
import '../App.css'; 
<<<<<<< HEAD
import { Line } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";


const Forecast = () => {
  const [forecastData, setForecastData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
    
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        const serverPort = process.env.REACT_APP_SERVER_PORT;
        
        const response = await fetch(
          `${serverUrl}:${serverPort}/forecast`
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

  const chartData = {
    labels: forecastData?.list?.map(item => formatDate(item.dt_txt)) || [],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecastData?.list?.map(item => item.main.temp) || [],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: -30, 
        max: 30, 
      }
    }
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
                <table className="forecast-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Temperature (°C)</th>
                            <th>Humidity (%)</th>
                            <th>Pressure (hPa)</th>
                            <th>Weather</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecastData.list && forecastData.list.map((item, index) => (
                            <tr key={index} className="forecast-item">
                                <td>{formatDate(item.dt_txt)}</td>
                                <td>{item.main.temp} °C</td>
                                <td>{item.main.humidity}%</td>
                                <td>{item.main.pressure} hPa</td>
                                <td>{item.weather[0].description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3 className="forecast-subheading">Weather forecast chart:</h3>
                <Line data={chartData} options={options} />
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);

};

export default Forecast;

=======

const Price = () => {
    const [priceData, setPriceData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8000/price`
                );
                const data = await response.json();
                setPriceData(data);
            } catch (error) {
                console.error('Error fetching electricity price:', error);
            }
        };

        fetchData();
    }, []);

    const formatDate2 = (dateString) => {
        const date = new Date(dateString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedDate = date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        return `${formattedDate} ${hours}:${minutes}`;
    };

    const formatPrice = (value) => {
        // Convert the price to cents per kWh with two decimal places
        const centsPerKWh = (value / 10).toFixed(2); // 1 MWh = 1000 kWh, so divide the value by 10
        return centsPerKWh;
    }

    const formatPriceWithVAT = (value) => {
        // Convert the price to cents per kWh with two decimal places
        const centsPerKWh = (value / 10).toFixed(2); // 1 MWh = 1000 kWh, so divide the value by 10
        // Add VAT 
        const priceWithVAT = (centsPerKWh * 1.24).toFixed(2); // Assuming VAT is 24%
        return priceWithVAT;
    }

    return (
        <div className="PriceContainer">
            <h2>Electricity price</h2>
            {priceData ? (
                <div>
                    <table className="PriceTable">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Price (cents/KWh)</th>
                                <th>Price with VAT (cents/KWh)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {priceData.data.map((item, index) => (
                                <tr key={index}>
                                    <td>{formatDate2(item.startTime)}</td>
                                    <td>{formatPrice(item.value)}</td>
                                    <td>{formatPriceWithVAT(item.value)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Price;
>>>>>>> daca3c4cdea2d6f2f77afb4769d86ac67fe00f17
