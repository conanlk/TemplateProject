import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const overlappingBarData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
  ],
}

const overlappingBarOptions = {
  seriesBarDistance: 10,
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

const overlappingResponsiveOptions = [
  [
    '',
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc(value) {
          return value[0]
        },
      },
    },
  ],
]

const Chart = () => {
  return (
    <div>
      <ChartistGraph
        className="height-300"
        data={overlappingBarData}
        options={overlappingBarOptions}
        responsive-options={overlappingResponsiveOptions}
        type="Bar"
      />
    </div>
  )
}

export default Chart
