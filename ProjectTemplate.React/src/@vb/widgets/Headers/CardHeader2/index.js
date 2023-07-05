import React from 'react'
import { Menu, Dropdown } from 'antd'

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

const Header = ({ data }) => {
  return (
    <div className="card-header-flex">
      <div className="d-flex flex-column justify-content-center mr-auto">
        <h5 className="mb-0">
          <strong>{data.title}</strong>
        </h5>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <Dropdown overlay={dropdownMenu} placement="bottomRight">
          <button type="button" className="btn btn-light">
            <i className="fe fe-more-vertical" />
          </button>
        </Dropdown>
      </div>
    </div>
  )
}

Header.defaultProps = {
  data: {
    title: 'With dropdown',
  },
}

export default Header
