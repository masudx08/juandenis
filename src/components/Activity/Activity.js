import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
const mock = require('../../assets/mock.json')

export default function Activity() {
  const data = mock.activity
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Page View Activity',
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}
