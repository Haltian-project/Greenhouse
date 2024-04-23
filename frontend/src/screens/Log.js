
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Log = () => {
const navigate = useNavigate();
    const [logData, setLogData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch sensor data from backend API
            const serverUrl = process.env.REACT_APP_SERVER_URL;
            const serverPort = process.env.REACT_APP_SERVER_PORT;
            const response = await fetch(
              `${serverUrl}:${serverPort}/logdata`);
            const data = await response.json();
            setLogData(data);
          } catch (error) {
            console.error('Error fetching chart data:', error);
          }
        };
    
        fetchData();
      }, []);
    





  return (
    <div>
      <button1 onClick={() => navigate('/')}>Back To Home</button1>
     
    </div>
  );
}


export default Log;