import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const areaData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [[5, 9, 7, 8, 5, 3, 5, 4]],
}

const areaOptions = {
  low: 0,
  showArea: true,
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

const Chart = () => {
  return (
    <div>
      <ChartistGraph className="height-300" data={areaData} options={areaOptions} type="Line" />
    </div>
  )
}

export default Chart
