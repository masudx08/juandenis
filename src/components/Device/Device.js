import React from 'react'
import { Doughnut } from 'react-chartjs-2';
const deviceData = require('./device.json')

export default function Device() {
  const data = deviceData
  return (
    <div>
      <h5>Visitor by Device</h5>
      <Doughnut data={data} />
    </div>
  )
}
