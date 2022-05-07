import React from 'react'
import { Doughnut } from 'react-chartjs-2';
const mock = require('../../assets/mock.json')

export default function Device() {
  const data = mock.device
  return (
    <div>
      <h5>Visitor by Device</h5>
      <Doughnut data={data} />
    </div>
  )
}
