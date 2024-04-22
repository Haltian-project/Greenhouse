import React, { useState } from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
<<<<<<< HEAD
import exampleData from '../exampleData'; // Tuodaan esimerkkidata
=======
import exampleData from '../exampleData'; 
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
import { Chart } from "chart.js/auto";



const Charts = () => {
<<<<<<< HEAD
  const [showTemp, setShowTemp] = useState(false);
  const [showOutsideTemp, setShowOutsideTemp] = useState(false);
  const [showHumidity, setShowHumidity] = useState(false);
  const [showPH, setShowPH] = useState(false);
  const [showCO2, setShowCO2] = useState(false);
=======
  const [showInsideTemp, setShowInsideTemp] = useState(false);
  const [showInsideHumidity, setShowInsideHumidity] = useState(false);
  const [showInsideAirPressure, setShowInsideAirPressure] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const [showCO2, setCO2] = useState(false);
  const [showLightIntensity, setShowLightIntensity] = useState(false);
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
  const [showAllCharts, setShowAllCharts] = useState(false);

  return (
    <div>
      <h1>Green House</h1>
<<<<<<< HEAD
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
=======
      
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
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
        {showCO2 ? 'Hide CO2 Chart' : 'Show CO2 Chart'}
      </button>
      {showCO2 && (
        <div className="chart-container">
          <Line data={exampleData.co2} /> 
        </div>
      )}
<<<<<<< HEAD
=======
      
      
      <h2>All charts:</h2>
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
      <button onClick={() => setShowAllCharts(!showAllCharts)}>
        {showAllCharts ? 'Hide All Charts' : 'Show All Charts'}
      </button>
      {showAllCharts && (
        <div className="chart-container">
          <Line
            data={{
<<<<<<< HEAD
              labels: exampleData.temp.labels,
              datasets: [
                { ...exampleData.temp.datasets[0], label: 'Temp' },
                { ...exampleData.outsideTemp.datasets[0], label: 'Outside Temp' },
                { ...exampleData.humidity.datasets[0], label: 'Humidity' },
                { ...exampleData.ph.datasets[0], label: 'PH' },
                { ...exampleData.co2.datasets[0], label: 'CO2' },
=======
              labels: exampleData.insideTemperature.labels,
              datasets: [
                { ...exampleData.insideTemperature.datasets[0], label: 'Inside Temp' },
                { ...exampleData.insideHumidity.datasets[0], label: 'Inside Humidity' },
                { ...exampleData.insideAirPressure.datasets[0], label: 'Inside Air Pressure' },
                { ...exampleData.light.datasets[0], label: 'Light' },
                { ...exampleData.co2.datasets[0], label: 'CO2' },
                { ...exampleData.lightIntensity.datasets[0], label: 'Light Intensity' },
>>>>>>> 3fc46205a7c69761693abd368ab5f76dfba441ef
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Charts;
