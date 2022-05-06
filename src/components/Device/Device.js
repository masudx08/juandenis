import React from 'react'
import { Doughnut } from 'react-chartjs-2';


export default function Device() {
  const data = {
    labels: ['Tablet', 'Mobile', 'Desktop'],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 40, 10],
        backgroundColor: [
          'rgb(49, 49, 49)',
          'rgb(255, 165, 0)',
          'rgb(192, 192, 192)',
        ],
        borderColor: [
          'rgb(49, 49, 49)',
          'rgb(255, 165, 0)',
          'rgb(192, 192, 192)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <h5>Visitor by Device</h5>
      <Doughnut data={data} />
    </div>
  )
}
