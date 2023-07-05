import React from 'react'
import { Pie } from 'react-chartjs-2'

const pieData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}

const pieOptions = {}

const Chart = () => {
  return (
    <div>
      <Pie data={pieData} options={pieOptions} width={400} height={200} />
    </div>
  )
}

export default Chart
