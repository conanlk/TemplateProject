import React from 'react'
import { Dropdown, Menu } from 'antd'

const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <a>Action</a>
    </Menu.Item>
    <Menu.Item>
      <a>Another action</a>
    </Menu.Item>
    <Menu.Item>
      <a>Something else here</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Separated link</a>
    </Menu.Item>
  </Menu>
)

const HeaderTabbed = ({ data }) => {
  return (
    <div className="card-header-flex">
      <div className="d-flex flex-column justify-content-center mr-auto">
        <h5 className="mb-0">
          <strong>{data.title}</strong>
        </h5>
      </div>
      <div className="d-inline-flex align-items-center">
        <Dropdown overlay={dropdownMenu} placement="bottomRight">
          <a className="nav-link dropdown-toggle" role="button">
            Dropdown
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

HeaderTabbed.defaultProps = {
  data: {
    title: 'With dropdown',
  },
}

export default HeaderTabbed
