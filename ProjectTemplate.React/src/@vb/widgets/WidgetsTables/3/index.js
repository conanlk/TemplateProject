import React from 'react'
import { Table } from 'antd'
import data from './data.json'

const columns = [
  {
    dataIndex: 'avatar',
    key: 'avatar',
    className: 'bg-transparent text-gray-6 width-50',
    render: (text) => {
      return (
        <div>
          <div className="vb__utils__avatar">
            <img src={text} alt="User avatar" />
          </div>
        </div>
      )
    },
  },
  {
    title: 'USERNAME',
    dataIndex: 'userName',
    key: 'userName',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return (
        <div>
          <div>{text.name}</div>
          <div className="text-gray-4">{text.position}</div>
        </div>
      )
    },
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    key: 'location',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    dataIndex: 'action',
    key: 'action',
    className: 'bg-transparent text-right',
    render: () => {
      return (
        <div>
          <button type="button" className="btn btn-primary mr-2">
            <i className="fe fe-plus-circle" />
          </button>
          <button type="button" className="btn btn-light">
            <i className="fe fe-settings text-blue" />
          </button>
        </div>
      )
    },
  },
]

const Table3 = () => {
  return (
    <div className="table-responsive text-nowrap">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default Table3
