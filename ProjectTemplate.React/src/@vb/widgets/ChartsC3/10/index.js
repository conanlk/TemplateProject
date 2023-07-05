import React from 'react'
import C3Chart from 'react-c3js'

const colors = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

const zoom = {
  data: {
    columns: [
      [
        'Sample',
        30,
        200,
        100,
        400,
        150,
        250,
        150,
        200,
        170,
        240,
        350,
        150,
        100,
        400,
        150,
        250,
        150,
        200,
        170,
        240,
        100,
        150,
        250,
        150,
        200,
        170,
        240,
        30,
        200,
        100,
        400,
        150,
        250,
        150,
        200,
        170,
        240,
        350,
        150,
        100,
        400,
        350,
        220,
        250,
        300,
        270,
        140,
        150,
        90,
        150,
        50,
        120,
        70,
        40,
      ],
    ],
    colors: {
      Sample: colors.primary,
    },
  },
  zoom: {
    enabled: !0,
  },
}

const Chart = () => {
  return (
    <div>
      <C3Chart data={zoom.data} color={zoom.color} zoom={zoom.zoom} />
    </div>
  )
}

export default Chart
