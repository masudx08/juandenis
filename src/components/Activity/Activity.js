import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
const activityData = require('./activity.json')

export default function Activity() {
  const data = {
    labels: activityData.labels,
    datasets: activityData.datasets
  };
  
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
