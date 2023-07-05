import React, { useState, useEffect } from 'react'
import TradeChart from './TradeChart'
import getData from './TradeChart/utils'

const CryptoChart = () => {
  const [graphData, setGraphData] = useState(null)
  useEffect(() => {
    getData().then((data) => {
      setGraphData(data)
    })
  }, [])

  return (
    <div style={{ height: 400 }}>
      {graphData !== null && <TradeChart type="hybrid" data={graphData} />}
    </div>
  )
}

export default CryptoChart
