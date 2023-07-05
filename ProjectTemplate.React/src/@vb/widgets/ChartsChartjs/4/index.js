import React from 'react'
import { Polar } from 'react-chartjs-2'

const polarData = {
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      label: 'My dataset', // for legend
    },
  ],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
}

const polarOptions = {
  elements: {
    arc: {
      borderColor: '#4BC0C0',
    },
  },
}

const Chart = () => {
  return (
    <div>
      <Polar data={polarData} options={polarOptions} width={400} height={200} />
    </div>
  )
}

export default Chart
