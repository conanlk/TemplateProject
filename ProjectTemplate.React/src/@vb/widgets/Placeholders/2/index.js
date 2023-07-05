import React from 'react'
import { Skeleton } from 'antd'

const PaginationComponent = () => {
  return (
    <div>
      <Skeleton paragraph={{ rows: 4 }} active />
      <Skeleton paragraph={{ rows: 1 }} active />
    </div>
  )
}

export default PaginationComponent
