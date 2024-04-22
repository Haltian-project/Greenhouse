import React, { useState, useEffect } from 'react';
import '../App.css'; 

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
