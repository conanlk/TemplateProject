import React from 'react'
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const donut = {
  data: {
    columns: [
      ['Danger', 30],
      ['Success', 120],
    ],
    type: 'donut',
  },
  color: {
    pattern: [colors.danger, colors.success],
  },
  donut: {
    title: 'Connections',
  },
}

const Chart = () => {
  return (
    <div>
      <C3Chart data={donut.data} color={donut.color} donut={donut.donut} />
    </div>
  )
}

export default Chart
