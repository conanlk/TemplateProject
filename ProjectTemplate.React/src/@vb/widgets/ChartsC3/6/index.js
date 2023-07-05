import React from 'react'
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const bar = {
  data: {
    columns: [
      ['Danger', 30, 200, 100, 400, 150, 250],
      ['Default', 130, 100, 140, 200, 150, 50],
      ['Primary', 130, -150, 200, 300, -200, 100],
    ],
    type: 'bar',
  },
  bar: {
    width: {
      max: 20,
    },
  },
  color: {
    pattern: [colors.danger, colors.def, colors.primary],
  },
  grid: {
    y: {
      show: !0,
    },
    x: {
      show: !1,
    },
  },
}

const Chart = () => {
  return (
    <div>
      <C3Chart data={bar.data} color={bar.color} grid={bar.grid} bar={bar.bar} />
    </div>
  )
}

export default Chart
