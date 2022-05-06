import React from 'react'
import Device from '../../components/Device/Device'
import Location from '../../components/Location/Location'
import Source from '../../components/Source/Source'
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, } from 'chart.js';
import Activity from '../../components/Activity/Activity';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels,  CategoryScale, LinearScale, PointElement, LineElement, Title,);

export default function Home() {
  return (
    <div style={{width:'300px'}}>
      <Activity />
      <Device />
      <Source  />
      <Location />
    </div>
  )
}
