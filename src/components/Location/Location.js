import React from 'react'

import { Doughnut } from 'react-chartjs-2';



export default function Location() {
  const data = {
    labels: ['Asia', 'Africa', 'Australia', 'Europe'],
    datasets: [
      {
        label: '# of Votes',
        data: [50, 20, 30, 45],
        backgroundColor: [
          'rgb(49, 49, 49)',
          'rgb(255, 165, 0)',
          'rgb(192, 192, 192)',
          'rgb(228, 226, 226)'
        ],
        borderColor: [
          'rgb(49, 49, 49)',
          'rgb(255, 165, 0)',
          'rgb(192, 192, 192)',
          'rgb(228, 226, 226)'
        ],
        borderWidth: 1,
      },
    ],
  };
 
  return (
    <div>
       <h5>Visitor by Location</h5>
      <Doughnut data={data}  />
    </div>
  )
}
