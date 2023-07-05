import React from 'react'
import { Menu, Dropdown } from 'antd'

const branchDropdown = (
  <Menu>
    <Menu.Item>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Testing
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Developers
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Killer features
      </a>
    </Menu.Item>
  </Menu>
)

const downloadMenu = (
  <Menu>
    <Menu.Item>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Clone
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Download
      </a>
    </Menu.Item>
  </Menu>
)

const GithubHead = () => {
  return (
    <div>
      <div className="text-dark font-size-18 mb-3">
        Pluggable enterprise-level react application framework.{' '}
        <a className="text-blue" href="#" onClick={(e) => e.preventDefault()}>
          https://umijs.org/
        </a>
      </div>
      <div className="mb-4">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="badge text-blue text-uppercase bg-light font-size-12 mr-2"
        >
          Umi
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="badge text-blue text-uppercase bg-light font-size-12 mr-2"
        >
          React-framework
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="badge text-blue text-uppercase bg-light font-size-12 mr-2"
        >
          Umijs
        </a>
      </div>
      <div className="d-flex flex-wrap justify-content-around border-top border-bottom">
        <div className="mx-3 my-2 text-nowrap">
          <i className="fe fe-arrow-down-right font-size-21 mr-1" />
          <strong className="text-dark font-size-18 mr-1">2,128</strong>
          commits
        </div>
        <div className="mx-3 my-2 text-nowrap">
          <i className="fe fe-chevrons-down font-size-21 mr-1" />
          <strong className="text-dark font-size-18 mr-1">18</strong>
          branches
        </div>
        <div className="mx-3 my-2 text-nowrap">
          <i className="fe fe-book-open font-size-21 mr-1" />
          <strong className="text-dark font-size-18 mr-1">1,286</strong>
          issues
        </div>
        <div className="mx-3 my-2 text-nowrap">
          <i className="fe fe-users font-size-21 mr-1" />
          <strong className="text-dark font-size-18 mr-1">26</strong>
          contributes
        </div>
      </div>
      <div className="d-flex flex-wrap border-bottom mb-3">
        <div className="my-3 mr-3">
          <Dropdown overlay={branchDropdown} placement="bottomLeft">
            <a
              className="btn btn-light text-blue dropdown-toggle"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Branch: Master
            </a>
          </Dropdown>
        </div>
        <a
          className="btn btn-light text-blue my-3 mr-auto"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          New Pull Request
        </a>
        <a
          className="btn btn-light text-blue my-3 mr-3"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Create New File
        </a>
        <div className="dropdown my-3 mr-3">
          <Dropdown overlay={downloadMenu} placement="bottomLeft">
            <a
              className="btn btn-success dropdown-toggle"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Clone or Download
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex align-items-center flex-wrap">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex-shrink-0 d-flex align-items-center pr-3 mr-auto text-primary mt-1 mb-1"
        >
          <div className="vb__utils__avatar vb__utils__avatar--size27 mr-3 flex-shrink-0">
            <img src="resources/images/avatars/1.jpg" alt="sorrycc" />
          </div>
          <div>sorrycc</div>
        </a>
        <div className="mt-1 mb-1">Latest commit ab2c07f 23 hours ago</div>
      </div>
    </div>
  )
}

export default GithubHead
