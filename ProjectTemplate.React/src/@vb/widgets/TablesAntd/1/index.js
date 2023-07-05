import React from 'react'
import { Table } from 'antd'
import data from './data.json'

const columns = [
  {
    title: '',
    dataIndex: 'favorites',
    key: 'favorites',
    render: (text) => (
      <i
        className={text === true ? 'icmn-star-full text-warning' : 'icmn-star-full text-default'}
      />
    ),
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
    render: (text) => (
      <a href="#" onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
    sorter: (a, b) => a.from.length - b.from.length,
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
    sorter: (a, b) => a.message.length - b.message.length,
  },
  {
    title: '',
    dataIndex: 'attachments',
    key: 'attachments',
    render: (text) => {
      if (text === true) {
        return <i className="icmn-attachment text-default" />
      }
      return ''
    },
  },
  {
    title: '',
    dataIndex: 'time',
    key: 'time',
  },
]

const Table1 = () => {
  return (
    <div className="table-responsive text-nowrap">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Table1
