import React from 'react'
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const subChart = {
  data: {
    columns: [
      ['Primary', 100, 165, 140, 270, 200, 140, 220, 210, 190, 100, 170, 250],
      ['Success', 110, 80, 100, 85, 125, 90, 100, 130, 120, 90, 100, 115],
    ],
    type: 'spline',
  },
  color: {
    pattern: [colors.primary, colors.danger],
  },
  subchart: {
    show: true,
  },
}

const Chart = () => {
  return (
    <div>
      <C3Chart data={subChart.data} color={subChart.color} subchart={subChart.subchart} />
    </div>
  )
}

export default Chart
