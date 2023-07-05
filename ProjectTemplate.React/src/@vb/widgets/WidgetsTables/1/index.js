import React from 'react'
import { Table } from 'antd'
import data from './data.json'

const columns = [
  {
    title: 'ACTION NAME',
    dataIndex: 'actionName',
    key: 'actionName',
    className: 'bg-transparent text-gray-6',
  },
  {
    title: 'PROGRESS',
    dataIndex: 'progress',
    key: 'progress',
    className: 'text-right bg-transparent text-gray-6',
    render: (text) => {
      return (
        <div className="progress">
          <div
            className={`progress-bar ${text.color}`}
            style={{ width: `${text.value}%` }}
            role="progressbar"
          />
        </div>
      )
    },
  },
  {
    title: 'VALUE',
    dataIndex: 'value',
    key: 'value',
    className: 'text-right bg-transparent text-gray-6',
    render: (text) => <span className="font-weight-bold">{text}</span>,
  },
]

const Table1 = () => {
  return (
    <div className="table-responsive text-nowrap">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default Table1
