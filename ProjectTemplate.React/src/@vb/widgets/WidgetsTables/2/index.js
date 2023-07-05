import React from 'react'
import { Table } from 'antd'
import defaultData from './data.json'

const columns = [
  {
    title: 'DESCRIPTION',
    dataIndex: 'description',
    key: 'description',
    className: 'bg-transparent',
    render: (text) => {
      return (
        <div className="text-wrap">
          <strong className="mb-3">{text.title}</strong>
          <div>{text.content}</div>
        </div>
      )
    },
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    key: 'location',
    className: 'text-right bg-transparent',
    render: (text) => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    title: 'VALUE',
    dataIndex: 'value',
    key: 'value',
    className: 'text-right bg-transparent',
    render: (text) => <span className="font-weight-bold">{text}</span>,
  },
]

const Table2 = ({ data = defaultData }) => {
  return (
    <div>
      <div className="table-responsive text-nowrap">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  )
}

export default Table2
