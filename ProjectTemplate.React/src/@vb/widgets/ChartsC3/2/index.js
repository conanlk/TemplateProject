import React from 'react'
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const spline = {
  data: {
    columns: [
      ['Primary', 100, 165, 140, 270, 200, 140, 220],
      ['Danger', 110, 80, 100, 85, 125, 90, 100],
    ],
    type: 'spline',
  },
  color: {
    pattern: [colors.primary, colors.danger],
  },
  axis: {
    x: {
      tick: {
        outer: !1,
      },
    },
    y: {
      max: 300,
      min: 0,
      tick: {
        outer: !1,
        count: 7,
        values: [0, 50, 100, 150, 200, 250, 300],
      },
    },
  },
  grid: {
    x: {
      show: !1,
    },
    y: {
      show: !0,
    },
  },
}

const Chart = () => {
  return (
    <div>
      <C3Chart data={spline.data} color={spline.color} axis={spline.axis} grid={spline.grid} />
    </div>
  )
}

export default Chart
