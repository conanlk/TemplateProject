import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const stackedBarData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  series: [
    [8e5, 12e5, 14e5, 13e5],
    [2e5, 4e5, 5e5, 3e5],
    [1e5, 2e5, 4e5, 6e5],
  ],
}

const stackedBarOptions = {
  stackBars: !0,
  axisY: {
    labelInterpolationFnc(value) {
      return `${value / 1e3}k`
    },
  },
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

const Chart = () => {
  return (
    <div>
      <ChartistGraph
        className="height-300"
        data={stackedBarData}
        options={stackedBarOptions}
        type="Bar"
      />
    </div>
  )
}

export default Chart
