import React, { useState, useEffect } from 'react';
import '../App.css'; 
import { Line } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import { useNavigate } from 'react-router-dom';


const Consumption = () => {
    // State variable for storing consumption data
    const [consumptionData, setConsumptionData] = useState(null);
    
    // React router navigation hook
    const navigate = useNavigate();

    // State variable for showing/hiding info modal
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    // Function to toggle info modal visibility
    const toggleInfo = () => {
        setIsInfoVisible(!isInfoVisible);
    };

    // Fetch consumption data from backend API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_SERVER_URL}/consumption`
                );
                const data = await response.json();
                setConsumptionData(data);
            } catch (error) {
                console.error('Error fetching electricity consumption:', error);
            }
        };

        fetchData();
    }, []);

    // Format date string
    const formatDate2 = (dateString) => {
        const date = new Date(dateString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedDate = date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        return `${formattedDate} ${hours}:${minutes}`;
    };

    // Sort consumption data by time
    const sortedData = consumptionData ? [...consumptionData.data].reverse() : [];
    
    // Chart data
    const chartData = {
        labels: sortedData.map(item => formatDate2(item.startTime)),
        datasets: [
            {
                label: 'Consumption (MWh/h)',
                data: sortedData.map(item => item.value),
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1
            }
        ]
    };

    // Chart options
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };

    return (
        <div className="PriceContainer">
            <button1 onClick={() => navigate('/')}>Back To Home</button1>
            <h2>Electricity consumption</h2>
            <button className="info-button" onClick={toggleInfo}>
                Info
            </button>
            {/* Info Modal */}
            {isInfoVisible && (
                <div className="info-modal">
                    <div className="info-content">
                        <span className="close" onClick={toggleInfo}>&times;</span>
                        <div className="info-text">  
                            <p> Electricity consumption data in Finland is provided in 15-minute intervals. <br></br>
                                It could be replaced with data specific to the greenhouse's electricity<br></br> usage  if such 
                                information were available.  <br></br>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {consumptionData ? (
                <div>
                    <table className="PriceTable">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Consumption (MWh/h)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((item, index) => (
                                <tr key={index}>
                                    <td>{formatDate2(item.startTime)}</td>
                                    <td>{item.value}</td>
                                </tr>
                            )).reverse()} 
                        </tbody>
                    </table>
                    <h2>Electricity consumption chart:</h2>
                    <Line data={chartData} options={options} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Consumption;