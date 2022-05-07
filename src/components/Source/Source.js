import React from 'react'
import { Doughnut } from 'react-chartjs-2';
const sourceData = require('./source.json')

export default function Source() {
  const data = sourceData
  return (
    <div>
       <h5>Visitor by Source</h5>
      <Doughnut data={data} />
    </div>
  )
}
