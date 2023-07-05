import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const biPolarBarData = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]],
}

const biPolarBarOptions = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc(value, index) {
      return index % 2 === 0 ? value : null
    },
  },
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

const Chart = () => {
  return (
    <div>
      <ChartistGraph
        className="height-300"
        data={biPolarBarData}
        options={biPolarBarOptions}
        type="Bar"
      />
    </div>
  )
}

export default Chart
