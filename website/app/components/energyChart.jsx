"use client";
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const EnergyChart = () => {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    const fetchEnergyData = async () => {
      try {
        const response = await fetch('http://localhost:9001/api/energy/671b2e80ece35bb263336978');
        const data = await response.json();
        setEnergyData(data);
      } catch (error) {
        console.error('Error fetching energy data:', error);
      }
    };

    fetchEnergyData();
  }, []);

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
          text: 'Power (kWh)',
        },
        min: 0,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const energySource = energyData[tooltipItem.dataIndex]?.source || 'unknown';
            return `Power: ${tooltipItem.raw} kWh (Source: ${energySource})`;
          },
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white border rounded-xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Power Usage Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default EnergyChart;
