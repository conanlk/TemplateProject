import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const scatterTimes = function scatter(n) {
  return Array(...new Array(n))
}

const scatterData = scatterTimes(52)
  .map(Math.random)
  .reduce(
    (scatter, rnd, index) => {
      const data = scatter
      data.labels.push(index + 1)
      data.series.forEach((series) => {
        series.push(Math.random() * 100)
      })
      return data
    },
    {
      labels: [],
      series: scatterTimes(4).map(() => []),
    },
  )

const scatterOptions = {
  showLine: false,
  axisX: {
    labelInterpolationFnc(value, index) {
      return index % 13 === 0 ? `W${value}` : null
    },
  },
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

const scatterResponsiveOptions = [
  [
    'screen and (min-width: 640px)',
    {
      axisX: {
        labelInterpolationFnc(value, index) {
          return index % 4 === 0 ? `W${value}` : null
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
        data={scatterData}
        options={scatterOptions}
        responsive-options={scatterResponsiveOptions}
        type="Line"
      />
    </div>
  )
}

export default Chart
