import React, { useState } from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
import exampleData from '../exampleData'; // Tuodaan esimerkkidata
import { Chart } from "chart.js/auto";



const Charts = () => {
  const [showTemp, setShowTemp] = useState(false);
  const [showOutsideTemp, setShowOutsideTemp] = useState(false);
  const [showHumidity, setShowHumidity] = useState(false);
  const [showPH, setShowPH] = useState(false);
  const [showCO2, setShowCO2] = useState(false);
  const [showAllCharts, setShowAllCharts] = useState(false);

  return (
    <div>
      <h1>Green House</h1>
      <button onClick={() => setShowTemp(!showTemp)}>
        {showTemp ? 'Hide Temp Chart' : 'Show Temp Chart'}
      </button>
      {showTemp && (
        <div className="chart-container">
          <Line data={exampleData.temp} /> 
        </div>
      )}
      <button onClick={() => setShowOutsideTemp(!showOutsideTemp)}>
        {showOutsideTemp ? 'Hide Outside Temp Chart' : 'Show Outside Temp Chart'}
      </button>
      {showOutsideTemp && (
        <div className="chart-container">
          <Line data={exampleData.outsideTemp} /> 
        </div>
      )}
      <button onClick={() => setShowHumidity(!showHumidity)}>
        {showHumidity ? 'Hide Humidity Chart' : 'Show Humidity Chart'}
      </button>
      {showHumidity && (
        <div className="chart-container">
          <Line data={exampleData.humidity} /> 
        </div>
      )}
      <button onClick={() => setShowPH(!showPH)}>
        {showPH ? 'Hide PH Chart' : 'Show PH Chart'}
      </button>
      {showPH && (
        <div className="chart-container">
          <Line data={exampleData.ph} /> 
        </div>
      )}
      <button onClick={() => setShowCO2(!showCO2)}>
        {showCO2 ? 'Hide CO2 Chart' : 'Show CO2 Chart'}
      </button>
      {showCO2 && (
        <div className="chart-container">
          <Line data={exampleData.co2} /> 
        </div>
      )}
      <button onClick={() => setShowAllCharts(!showAllCharts)}>
        {showAllCharts ? 'Hide All Charts' : 'Show All Charts'}
      </button>
      {showAllCharts && (
        <div className="chart-container">
          <Line
            data={{
              labels: exampleData.temp.labels,
              datasets: [
                { ...exampleData.temp.datasets[0], label: 'Temp' },
                { ...exampleData.outsideTemp.datasets[0], label: 'Outside Temp' },
                { ...exampleData.humidity.datasets[0], label: 'Humidity' },
                { ...exampleData.ph.datasets[0], label: 'PH' },
                { ...exampleData.co2.datasets[0], label: 'CO2' },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Charts;
