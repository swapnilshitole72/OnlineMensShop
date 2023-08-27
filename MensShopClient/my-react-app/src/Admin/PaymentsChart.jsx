import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import 'chart.js';

const PaymentActivityChart = () => {
  const [paymentData, setPaymentData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Fetch payment data from your Java backend using Axios
    axios.get('/api/paymentActivity')
      .then(response => {
        const fetchedData = response.data; // Assuming your API returns data in a suitable format
        setPaymentData(fetchedData);
      })
      .catch(error => {
        console.error('Error fetching payment data:', error);
      });
  }, []);

  const chartOptions = {
    scales: {
      y: {
        type: 'linear', // Use 'linear' scale for the y-axis
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Last 7 Days Payment Activity</h2>
      <Bar data={paymentData} options={chartOptions} />
    </div>
  );
};

export default PaymentActivityChart;
