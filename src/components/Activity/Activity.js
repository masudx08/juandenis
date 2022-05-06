import React from 'react'
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

export default function Activity() {
  const labels = ['January', 'March',  'May', 'July', 'September', 'November']
  const data = {
    labels,
    datasets: [
      {
        label: 'Sale',
        data: [10, 952, 807, 1121, 536, 757, 653],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  return (
    <div>
      Source
      <Line data={data} options={options} />
    </div>
  )
}
