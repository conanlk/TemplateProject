import React, { useState } from 'react'
import { Alert, Table, Spin } from 'antd'

const myOrdersColumns = [
  {
    title: 'Order Date',
    dataIndex: 'orderDate',
    key: 'orderDate',
  },
  {
    title: 'Open Date',
    dataIndex: 'openDate',
    key: 'openDate',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (value) => (
      <span style={{ color: value === 'SELL' ? '#f75535' : '#00a45b' }}>{value}</span>
    ),
  },
  {
    title: 'Bid/Ask',
    dataIndex: 'bidAsk',
    key: 'bidAsk',
  },
  {
    title: 'Filled',
    dataIndex: 'filled',
    key: 'filled',
  },
  {
    title: 'Units Total',
    dataIndex: 'unitsTotal',
    key: 'unitsTotal',
  },
  {
    title: 'Actual Rate',
    dataIndex: 'actualRate',
    key: 'actualRate',
  },
  {
    title: 'Est. Total',
    dataIndex: 'estTotal',
    key: 'estTotal',
  },
]

const myOrdersData = [
  {
    key: 1,
    orderDate: '2018/05/27 20:55:39',
    openDate: '2018/05/27 20:55:39',
    type: 'SELL',
    bidAsk: '7319.44600000',
    filled: '0.26510202',
    unitsTotal: '0.26510202',
    actualRate: '7325.77049148',
    estTotal: '1937.22136398',
  },
  {
    key: 2,
    orderDate: '2018/05/24 09:28:04',
    openDate: '2018/05/24 09:27:11',
    type: 'BUY',
    bidAsk: '7660.00000000',
    filled: '0.29959731',
    unitsTotal: '0.29959731',
    actualRate: '7660.00000000',
    estTotal: '-2300.65268307',
  },
  {
    key: 3,
    orderDate: '2018/05/18 20:21:08',
    openDate: '2018/05/18 20:21:08',
    type: 'SELL',
    bidAsk: '8121.00000001',
    filled: '0.28400674',
    unitsTotal: '0.28400674',
    actualRate: '8121.00000000',
    estTotal: '2300.65268871',
  },
]

const CryptoLoadTable = () => {
  const [myOrdersLoading, setMyOrdersLoading] = useState(false)
  const [myOrdersLoaded, setMyOrdersLoaded] = useState(false)

  const handleMyOrders = (e) => {
    e.preventDefault()
    setMyOrdersLoading(true)
    setTimeout(() => {
      setMyOrdersLoading(false)
      setMyOrdersLoaded(true)
    }, 1500)
  }

  return (
    <div>
      {!myOrdersLoaded && (
        <a href="#" onClick={handleMyOrders}>
          <Spin spinning={myOrdersLoading}>
            <Alert
              className="pt-4 pb-4"
              message="Click to view order history details"
              type="info"
            />
          </Spin>
        </a>
      )}
      {myOrdersLoaded && (
        <div className="table-responsive text-nowrap">
          <Table
            columns={myOrdersColumns}
            dataSource={myOrdersData}
            pagination={{ position: 'bottom' }}
            size="small"
          />
        </div>
      )}
    </div>
  )
}

export default CryptoLoadTable
