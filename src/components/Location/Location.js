import React from 'react'

import { Doughnut } from 'react-chartjs-2';
const locationData = require('./locations.json')


export default function Location() {
  const data = locationData
 
  return (
    <div>
       <h5>Visitor by Location</h5>
      <Doughnut data={data}  />
    </div>
  )
}
