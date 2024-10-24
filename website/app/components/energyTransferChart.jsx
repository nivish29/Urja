"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const EnergyTransferChart = () => {
  // Dummy data: time, energy transferred outside
  const energyTransferData = [
    { time: '10:00', energy: 15 },
    { time: '11:00', energy: 25 },
    { time: '12:00', energy: 20 },
    { time: '13:00', energy: 30 },
    { time: '14:00', energy: 35 },
    { time: '15:00', energy: 40 },
    { time: '16:00', energy: 45 },
  ];

  // Chart Data and Configuration
  const data = {
    labels: energyTransferData.map(item => item.time),
    datasets: [
      {
        label: 'Energy Transferred Outside (kWh)',
        data: energyTransferData.map(item => item.energy),
        backgroundColor: '#014E53',
        borderColor: '#014E53',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Energy (kWh)',
        },
        min: 0,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Energy Transferred: ${tooltipItem.raw} kWh`,
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white border rounded-xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Energy Transfer Over Time</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default EnergyTransferChart;
