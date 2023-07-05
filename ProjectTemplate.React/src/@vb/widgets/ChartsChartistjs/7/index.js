import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const biPolarLineData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 2, 3, 1, -2, 0, 1, 0],
    [-2, -1, -2, -1, -2.5, -1, -2, -1],
    [0, 0, 0, 1, 2, 2.5, 2, 1],
    [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5],
  ],
}

const biPolarLineOptions = {
  high: 3,
  low: -3,
  showArea: !0,
  showLine: !1,
  showPoint: !1,
  fullWidth: !0,
  axisX: {
    showLabel: false,
    showGrid: false,
  },
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

const Chart = () => {
  return (
    <div>
      <ChartistGraph
        className="height-300"
        data={biPolarLineData}
        options={biPolarLineOptions}
        type="Line"
      />
    </div>
  )
}

export default Chart
