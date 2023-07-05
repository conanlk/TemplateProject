import React from 'react'
import { Tooltip } from 'antd'

const Header = ({ data }) => {
  return (
    <div className="card-header-flex align-items-center">
      <div className="d-flex flex-column justify-content-center mr-auto">
        <h5 className="mb-0">
          <strong>{data.title}</strong>
        </h5>
      </div>
      <div>
        <Tooltip placement="top" title="Unlock Account">
          <a className="btn btn-sm btn-light mr-2">
            <i className="fe fe-unlock" />
          </a>
        </Tooltip>
        <Tooltip placement="top" title="Mark as important">
          <a className="btn btn-sm btn-light mr-2">
            <i className="fe fe-star" />
          </a>
        </Tooltip>
        <Tooltip placement="top" title="Delete user">
          <a className="btn btn-sm btn-light">
            <i className="fe fe-trash" />
          </a>
        </Tooltip>
      </div>
    </div>
  )
}

Header.defaultProps = {
  data: {
    title: 'With actions',
  },
}

export default Header
