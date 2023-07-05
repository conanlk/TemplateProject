import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const labelsPieData = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40],
}

const labelsPieOptions = {
  labelInterpolationFnc(value) {
    return value[0]
  },
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

const labelsPieResponsiveOptions = [
  [
    'screen and (min-width: 640px)',
    {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc(value) {
        return value
      },
    },
  ],
  [
    'screen and (min-width: 1024px)',
    {
      labelOffset: 80,
      chartPadding: 20,
    },
  ],
]

const Chart = () => {
  return (
    <div>
      <ChartistGraph
        className="height-300"
        data={labelsPieData}
        options={labelsPieOptions}
        responsive-options={labelsPieResponsiveOptions}
        type="Pie"
      />
    </div>
  )
}

export default Chart
