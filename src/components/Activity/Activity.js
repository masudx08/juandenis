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
        data: labels.map(() => faker.datatype.number({ min: 100, max: 3000 })),
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
