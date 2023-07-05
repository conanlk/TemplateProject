import React from 'react'
import ChartistGraph from 'react-chartist'

const animationData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [1, 2, 2.7, 0, 3, 5, 3, 4, 8, 10, 12, 7],
    [0, 1.2, 2, 7, 2.5, 9, 5, 8, 9, 11, 14, 4],
    [10, 9, 8, 6.5, 6.8, 6, 5.4, 5.3, 4.5, 4.4, 3, 2.8],
  ],
}

const animatonOptions = {
  axisX: {
    labelInterpolationFnc(value, index) {
      return index % 2 !== 0 ? !1 : value
    },
  },
}

const Chart = () => {
  return (
    <div>
      <ChartistGraph
        className="height-300 chart-css-animations chartist-theme-dark chartist-animated"
        data={animationData}
        options={animatonOptions}
        type="Line"
      />
    </div>
  )
}

export default Chart
