import React from 'react'
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const area = {
  data: {
    columns: [
      ['Primary', 300, 350, 300, 0, 0, 0],
      ['Success', 130, 100, 140, 200, 150, 50],
    ],
    types: {
      Primary: 'area',
      Success: 'area-spline',
    },
  },
  color: {
    pattern: [colors.primary, colors.success],
  },
}

const Chart = () => {
  return (
    <div>
      <C3Chart data={area.data} color={area.color} />
    </div>
  )
}

export default Chart
