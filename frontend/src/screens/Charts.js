import React, { useState, useEffect } from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";


const Charts = () => {
  const [showInsideTemp, setShowInsideTemp] = useState(false);
  const [showInsideHumidity, setShowInsideHumidity] = useState(false);
  const [showInsideAirPressure, setShowInsideAirPressure] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const [showCO2, setShowCO2] = useState(false);
  const [showLightIntensity, setShowLightIntensity] = useState(false);
  const [showAllCharts, setShowAllCharts] = useState(false);

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch sensor data from backend API
        const response = await fetch('http://localhost:8000/get20data');
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Green House</h1>
      
      <button onClick={() => setShowInsideTemp(!showInsideTemp)}>
        {showInsideTemp ? 'Hide Inside Temp Chart' : 'Show Inside Temp Chart'}
      </button>
      {showInsideTemp && chartData?.temp && (
        <div className="chart-container">
          <Line
            data={{
              labels: chartData.temp.map(entry => entry.timestamp),
              datasets: [{ label: 'Inside Temp', data: chartData.temp.map(entry => entry.value) }],
            }}
          /> 
        </div>
      )}
      
      <button onClick={() => setShowInsideHumidity(!showInsideHumidity)}>
        {showInsideHumidity ? 'Hide Inside Humidity Chart' : 'Show Inside Humidity Chart'}
      </button>
      {showInsideHumidity && chartData?.humd && (
        <div className="chart-container">
          <Line
            data={{
              labels: chartData.humd.map(entry => entry.timestamp),
              datasets: [{ label: 'Inside Humidity', data: chartData.humd.map(entry => entry.value) }],
            }}
          /> 
        </div>
      )}

      <button onClick={() => setShowInsideAirPressure(!showInsideAirPressure)}>
        {showInsideAirPressure ? 'Hide Inside Air Pressure Chart' : 'Show Inside Air Pressure Chart'}
      </button>
      {showInsideAirPressure && chartData?.airp && (
        <div className="chart-container">
          <Line
            data={{
              labels: chartData.airp.map(entry => entry.timestamp),
              datasets: [{ label: 'Inside Air Pressure', data: chartData.airp.map(entry => entry.value) }],
            }}
          /> 
        </div>
      )}

      <button onClick={() => setShowLight(!showLight)}>
        {showLight ? 'Hide Light Chart' : 'Show Light Chart'}
      </button>
      {showLight && chartData?.lght && (
        <div className="chart-container">
          <Line
            data={{
              labels: chartData.lght.map(entry => entry.timestamp),
              datasets: [{ label: 'Light', data: chartData.lght.map(entry => entry.value) }],
            }}
          /> 
        </div>
      )}

      <button onClick={() => setShowLightIntensity(!showLightIntensity)}>
        {showLightIntensity ? 'Hide Light Intensity Chart' : 'Show Light Intensity Chart'}
      </button>
      {showLightIntensity && chartData?.lghtint && (
        <div className="chart-container">
          <Line
            data={{
              labels: chartData.lghtint.map(entry => entry.timestamp),
              datasets: [{ label: 'Light Intensity', data: chartData.lghtint.map(entry => entry.value) }],
            }}
          /> 
        </div>
      )}

      <button onClick={() => setShowCO2(!showCO2)}>
        {showCO2 ? 'Hide CO2 Chart' : 'Show CO2 Chart'}
      </button>
      {showCO2 && chartData?.carbonDioxide && (
        <div className="chart-container">
          <Line
            data={{
              labels: chartData.carbonDioxide.map(entry => entry.timestamp),
              datasets: [{ label: 'CO2', data: chartData.carbonDioxide.map(entry => entry.value) }],
            }}
          />  
        </div>
      )}
    </div>
  );
};

export default Charts;
