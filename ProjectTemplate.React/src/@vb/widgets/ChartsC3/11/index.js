import React from 'react'
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const pie = {
  data: {
    columns: [
      ['Primary', 30],
      ['Success', 120],
    ],
    type: 'pie',
  },
  color: {
    pattern: [colors.primary, colors.success],
  },
}

const Chart = () => {
  return (
    <div>
      <C3Chart data={pie.data} color={pie.color} />
    </div>
  )
}

export default Chart
