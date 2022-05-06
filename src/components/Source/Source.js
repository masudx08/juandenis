import React from 'react'
import { Doughnut } from 'react-chartjs-2';


export default function Source() {
  const data = {
    labels: ['Referral', 'Paid Search', 'Email', 'Search Engine'],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 60, 30, 15],
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
      Source
      <Doughnut data={data} />
    </div>
  )
}
