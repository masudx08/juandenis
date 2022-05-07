import React from 'react'

import { Doughnut } from 'react-chartjs-2';
const mock = require('../../assets/mock.json')


export default function Location() {
  const data = mock.location
 
  return (
    <div>
       <h5>Visitor by Location</h5>
      <Doughnut data={data}  />
    </div>
  )
}
