import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const horizontalData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  series: [
    [5, 4, 3, 7, 5, 10, 3],
    [3, 2, 9, 5, 4, 6, 4],
  ],
}

const horizontalOptions = {
  seriesBarDistance: 10,
  reverseData: !0,
  horizontalBars: !0,
  axisY: {
    offset: 70,
  },
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

const Chart = () => {
  return (
    <div>
      <ChartistGraph
        className="height-300"
        type="Bar"
        data={horizontalData}
        options={horizontalOptions}
      />
    </div>
  )
}

export default Chart
