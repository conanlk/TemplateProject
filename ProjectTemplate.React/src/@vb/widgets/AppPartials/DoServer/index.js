import React from 'react'
import { Dropdown, Menu } from 'antd'

const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Action
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Another action
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Something else here
      </a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Separated link
      </a>
    </Menu.Item>
  </Menu>
)

const DoServer = () => {
  return (
    <div>
      <div className="d-flex align-items-center flex-wrap">
        <div className="d-flex flex-nowrap align-items-center width-200 flex-shrink-1 mr-2">
          <div className="vb__utils__donut vb__utils__donut--danger mr-2 flex-shrink-0" />
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="font-weight-bold text-blue text-nowrap"
          >
            mediatec-main-server
          </a>
        </div>
        <div className="flex-grow-1 mr-2">FRA1 / 1GB / 25GB Disk</div>
        <div className="flex-grow-1 mr-auto">46.101.103.230</div>
        <div className="dropdown d-inline-block">
          <Dropdown overlay={dropdownMenu} placement="bottomRight">
            <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-noarrow">
              <i className="fe fe-more-vertical" />
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default DoServer
