import React from 'react'
import { Pagination } from 'antd'

const PaginationComponent = () => {
  return (
    <div className="clearfix">
      <Pagination defaultCurrent={1} total={50} className="float-right" />
    </div>
  )
}

export default PaginationComponent
