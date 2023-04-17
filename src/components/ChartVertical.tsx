import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ChartContainer = styled.div`
  width: 100%;
  background-color: #fff;
`

const ChartVertical: NextPage = () => {
  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  )
}

export default ChartVertical

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Исходящие звонки',
      align: 'start' as const,
      font: {
        size: 20,
        weight: '400'
      }
    },
  },
};
const labels = ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'];

export const data = {
  labels,
  datasets: [
    {
      data: [8200, 6000, 12000, 11700, 15800, 9000, 6000],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};