import React, { useState } from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
import exampleData from '../exampleData'; 
import { Chart } from "chart.js/auto";



const Charts = () => {
  const [showInsideTemp, setShowInsideTemp] = useState(false);
  const [showInsideHumidity, setShowInsideHumidity] = useState(false);
  const [showInsideAirPressure, setShowInsideAirPressure] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const [showCO2, setCO2] = useState(false);
  const [showLightIntensity, setShowLightIntensity] = useState(false);
  const [showAllCharts, setShowAllCharts] = useState(false);

  return (
    <div>
      <h1>Green House</h1>
      <h2>Inside charts:</h2>
      <button onClick={() => setShowInsideTemp(!showInsideTemp)}>
        {showInsideTemp ? 'Hide Inside Temp Chart' : 'Show Inside Temp Chart'}
      </button>
      {showInsideTemp && (
        <div className="chart-container">
          <Line data={exampleData.insideTemperature} /> 
        </div>
      )}
      <button onClick={() => setShowInsideHumidity(!showInsideHumidity)}>
        {showInsideHumidity ? 'Hide Inside Humidity Chart' : 'Show Inside Humidity Chart'}
      </button>
      {showInsideHumidity && (
        <div className="chart-container">
          <Line data={exampleData.insideHumidity} /> 
        </div>
      )}
      <button onClick={() => setShowInsideAirPressure(!showInsideAirPressure)}>
        {showInsideAirPressure ? 'Hide Inside Air Pressure Chart' : 'Show Inside Air Pressure Chart'}
      </button>
      {showInsideAirPressure && (
        <div className="chart-container">
          <Line data={exampleData.insideAirPressure} /> 
        </div>
      )}
      <button onClick={() => setShowLight(!showLight)}>
        {showLight ? 'Hide Light Chart' : 'Show Light Chart'}
      </button>
      {showLight && (
        <div className="chart-container">
          <Line data={exampleData.light} /> 
        </div>
      )}
      <button onClick={() => setShowLightIntensity(!showLightIntensity)}>
        {showLightIntensity ? 'Hide Light Intensity Chart' : 'Show Light Intensity Chart'}
      </button>
      {showLightIntensity && (
        <div className="chart-container">
          <Line data={exampleData.lightIntensity} /> 
        </div>
      )}
      <button onClick={() => setCO2(!showCO2)}>
        {showCO2 ? 'Hide CO2 Chart' : 'Show CO2 Chart'}
      </button>
      {showCO2 && (
        <div className="chart-container">
          <Line data={exampleData.co2} /> 
        </div>
      )}
      
      
      <h2>All charts:</h2>
      <button onClick={() => setShowAllCharts(!showAllCharts)}>
        {showAllCharts ? 'Hide All Charts' : 'Show All Charts'}
      </button>
      {showAllCharts && (
        <div className="chart-container">
          <Line
            data={{
              labels: exampleData.insideTemperature.labels,
              datasets: [
                { ...exampleData.insideTemperature.datasets[0], label: 'Inside Temp' },
                { ...exampleData.insideHumidity.datasets[0], label: 'Inside Humidity' },
                { ...exampleData.insideAirPressure.datasets[0], label: 'Inside Air Pressure' },
                { ...exampleData.light.datasets[0], label: 'Light' },
                { ...exampleData.co2.datasets[0], label: 'CO2' },
                { ...exampleData.lightIntensity.datasets[0], label: 'Light Intensity' },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Charts;
