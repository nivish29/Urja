"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const EnergyChart = () => {
  const energyData = [
    { time: '10:00', energy: 30, source: 'solar' },
    { time: '11:00', energy: 45, source: 'grid' },
    { time: '12:00', energy: 50, source: 'solar' },
    { time: '13:00', energy: 40, source: 'grid' },
    { time: '14:00', energy: 35, source: 'solar' },
    { time: '15:00', energy: 60, source: 'grid' },
    { time: '16:00', energy: 55, source: 'solar' },
    { time: '17:00', energy: 70, source: 'grid' },

  ];

  const data = {
    labels: energyData.map(item => item.time),
    datasets: [
      {
        label: 'Energy Usage (kWh)',
        data: energyData.map(item => item.energy),
        fill: false,
        borderColor: '#014E53',
        backgroundColor: '#014E53',
        pointRadius: 5,
        pointHoverRadius: 7,
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
          label: (tooltipItem) => {
            const energySource = energyData[tooltipItem.dataIndex].source;
            return `Energy: ${tooltipItem.raw} kWh (Source: ${energySource})`;
          },
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white border rounded-xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Energy Usage Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default EnergyChart;
