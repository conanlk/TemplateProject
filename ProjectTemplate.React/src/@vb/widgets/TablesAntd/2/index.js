import React from 'react'
import { Table } from 'antd'
import data from './data.json'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => (
      <a className="btn btn-sm btn-light" href="#" onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Purchase Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
    sorter: (a, b) => a.name.length - b.name.length,
    render: (text) => (
      <a className="btn btn-sm btn-light" href="#" onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
  },
  {
    title: 'Grand Total',
    dataIndex: 'total',
    key: 'total',
    render: (text) => <span>{`$${text}`}</span>,
    sorter: (a, b) => a.total - b.total,
  },
  {
    title: 'Tax',
    dataIndex: 'tax',
    key: 'tax',
    render: (text) => <span>{`$${text}`}</span>,
    sorter: (a, b) => a.tax - b.tax,
  },
  {
    title: 'Shipping',
    dataIndex: 'shipping',
    key: 'shipping',
    render: (text) => <span>{`$${text}`}</span>,
    sorter: (a, b) => a.shipping - b.shipping,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <span
        className={
          text === 'Processing'
            ? 'font-size-12 badge badge-primary'
            : 'font-size-12 badge badge-default'
        }
      >
        {text}
      </span>
    ),
    sorter: (a, b) => a.status.length - b.status.length,
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <span>
        <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-light mr-2">
          <i className="fe fe-edit mr-2" />
          View
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-light">
          <small>
            <i className="fe fe-trash mr-2" />
          </small>
          Remove
        </a>
      </span>
    ),
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
