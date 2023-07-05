import React from 'react'
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const stackedBar = {
  data: {
    columns: [
      ['Primary', -30, 200, 300, 400, -150, 250, -30, 200, 300, 400, -150, 250],
      ['Default', 130, 100, -400, 100, -150, 50, 130, 100, -400, 100, -150, 50],
      ['Danger', -230, 200, 200, -300, 250, 250, -230, 200, 200, -300, 250, 250],
      ['Success', 100, -250, 150, 200, -300, -100, 100, -250, 150, 200, -300, -100],
    ],
    type: 'bar',
    groups: [['Primary', 'Default', 'Danger', 'Success']],
  },
  color: {
    pattern: [colors.primary, colors.def, colors.danger, colors.success],
  },
  bar: {
    width: {
      max: 45,
    },
  },
  grid: {
    y: {
      show: !0,
      lines: [
        {
          value: 0,
        },
      ],
    },
  },
}

const Chart = () => {
  return (
    <div>
      <C3Chart
        data={stackedBar.data}
        color={stackedBar.color}
        bar={stackedBar.bar}
        grid={stackedBar.grid}
      />
    </div>
  )
}

export default Chart
