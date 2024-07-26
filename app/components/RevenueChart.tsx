// /components/RevenueChart.tsx
'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Post } from '@/lib/getData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface RevenueChartProps {
  data: Post[];
}

const dataFormatter = (number: number) => `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function RevenueChart({ data }: RevenueChartProps) {
  if (!data || data.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const chartData = {
    labels: data.map((item) => item.datetime),
    datasets: [
      {
        label: 'User 1 Production',
        data: data.map((item) => item.user1_production),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
      {
        label: 'User 1 Consumption',
        data: data.map((item) => item.user1_consumption),
        borderColor: 'darkred',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
      {
        label: 'User 2 Production',
        data: data.map((item) => item.user2_production),
        borderColor: 'blue',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
      },
      {
        label: 'User 2 Consumption',
        data: data.map((item) => item.user2_consumption),
        borderColor: 'darkblue',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Production and Consumption',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value',
        },
        ticks: {
          callback: (value: number) => dataFormatter(value),
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Production and Consumption</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}
