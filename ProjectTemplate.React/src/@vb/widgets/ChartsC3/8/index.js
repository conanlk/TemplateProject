import React from 'react'
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const combination = {
  data: {
    columns: [
      ['Primary', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50],
      ['Default', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
      ['Success', 300, 200, 160, 400, 250, 250, 300, 200, 160, 400, 250, 250],
      ['Danger', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
      ['Primary', 130, 120, 150, 140, 160, 150, 130, 120, 150, 140, 160, 150],
      ['Danger2', 90, 70, 20, 50, 60, 120, 90, 70, 20, 50, 60, 120],
    ],
    type: 'bar',
    types: {
      Success: 'spline',
      Danger: 'line',
      Danger2: 'area',
    },
    groups: [['Primary', 'Default']],
  },
  color: {
    pattern: [colors.primary, colors.def, colors.success, colors.danger, colors.danger],
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
      <C3Chart data={combination.data} color={combination.color} grid={combination.grid} />
    </div>
  )
}

export default Chart
