import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const smilData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  series: [
    [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
    [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
    [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
    [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3],
  ],
}

const smilOptions = {
  low: 0,
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
  seq: 0,
}

const smilListener = {
  created() {
    smilOptions.seq = 0
  },
  draw(data) {
    const delays = 80
    const durations = 500

    if (data.type === 'line') {
      smilOptions.seq += 1
      data.element.animate({
        opacity: {
          begin: smilOptions.seq * delays + 1e3,
          dur: durations,
          from: 0,
          to: 1,
        },
      })
    } else if (data.type === 'label' && data.axis === 'x')
      data.element.animate({
        y: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data.y + 100,
          to: data.y,
          easing: 'easeOutQuart',
        },
      })
    else if (data.type === 'label' && data.axis === 'y')
      data.element.animate({
        x: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data.x - 100,
          to: data.x,
          easing: 'easeOutQuart',
        },
      })
    else if (data.type === 'point')
      data.element.animate({
        x1: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart',
        },
        x2: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart',
        },
        opacity: {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart',
        },
      })
    else if (data.type === 'grid') {
      const pos1Animation = {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: data[`${data.axis.units.pos}1`] - 30,
        to: data[`${data.axis.units.pos}1`],
        easing: 'easeOutQuart',
      }
      const pos2Animation = {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: data[`${data.axis.units.pos}2`] - 100,
        to: data[`${data.axis.units.pos}2`],
        easing: 'easeOutQuart',
      }
      const ctAnimations = {}
      ctAnimations[`${data.axis.units.pos}1`] = pos1Animation
      ctAnimations[`${data.axis.units.pos}2`] = pos2Animation
      ctAnimations.opacity = {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: 'easeOutQuart',
      }
      data.element.animate(ctAnimations)
    }
  },
}

const Chart = () => {
  return (
    <div>
      <ChartistGraph
        className="height-300 chart-smil-animations"
        data={smilData}
        options={smilOptions}
        type="Line"
        listener={smilListener}
      />
    </div>
  )
}

export default Chart
