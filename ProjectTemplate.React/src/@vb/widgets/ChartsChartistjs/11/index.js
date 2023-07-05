import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const simplePieData = {
  series: [5, 3, 4],
}

const simplePieSum = function sum(a, b) {
  return a + b
}

const simplePieOptions = {
  labelInterpolationFnc(value) {
    return `${Math.round((value / simplePieData.series.reduce(simplePieSum)) * 100)}%`
  },
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

const Chart = () => {
  return (
    <div>
      <ChartistGraph
        className="height-300"
        data={simplePieData}
        options={simplePieOptions}
        type="Pie"
      />
    </div>
  )
}

export default Chart
