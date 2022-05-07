import React from 'react'
import { Doughnut } from 'react-chartjs-2';
const mock = require('../../assets/mock.json')

export default function Source() {
  const data = mock.source
  return (
    <div>
       <h5>Visitor by Source</h5>
      <Doughnut data={data} />
    </div>
  )
}
