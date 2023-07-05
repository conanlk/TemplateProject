import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}

const doughnutOptions = {}

const Chart = () => {
  return (
    <div>
      <Doughnut data={doughnutData} options={doughnutOptions} width={400} height={200} />
    </div>
  )
}

export default Chart
