import React from 'react';
import { Line } from 'react-chartjs-2';
import { NextPage } from 'next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const ChartContainer = styled.div`
  width: 100%;
  background-color: #fff;
`

const ChartLine: NextPage = () => {
  return (
    <ChartContainer>
      <Line options={options} data={data} />
    </ChartContainer>
  );
};

export default ChartLine;

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        boxWidth: 20,
        boxHeight: 20,
        font: {
          size: 12,
          weight: '400'
        },
      },
      position: 'bottom' as const,
      align: 'start' as const
    },
    tooltip: {
    },
    title: {
      display: true,
      text: 'Звонки',
      align: 'start' as const,
      font: {
        size: 20,
        weight: '400'
      }
    },
  },
}

const labels = ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'];
const data = {
  labels,
  datasets: [
    {
      label: 'Исходящие звонки',
      data: [2800, 4200, 10000, 12000, 8500, 3900, 0],
      borderColor: '#EAA43A',
      backgroundColor: '#EAA43A',
      borderWidth: 2,
      cubicInterpolationMode: 'monotone' as const,
    },
    {
      label: 'Входящие звонки',
      data: [11900, 11000, 19000, 16300, 20000, 10000, 7800],
      borderColor: '#4F46E5',
      backgroundColor: '#4F46E5',
      borderWidth: 2,
      cubicInterpolationMode: 'monotone' as const,
    },
  ],
}