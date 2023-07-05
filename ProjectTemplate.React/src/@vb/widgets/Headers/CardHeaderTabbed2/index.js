import React from 'react'
import { Tabs } from 'antd'

const HeaderTabbed = ({ data }) => {
  return (
    <div className="card-header-flex">
      <div className="d-flex flex-column justify-content-center mr-auto">
        <h5 className="mb-0">
          <strong>{data.title}</strong>
        </h5>
      </div>
      <Tabs defaultActiveKey="1" className="vb-tabs-pills">
        <Tabs.TabPane tab={<a className="nav-link">History</a>} key="1" />
        <Tabs.TabPane tab={<a className="nav-link">Information</a>} key="2" />
        <Tabs.TabPane tab={<a className="nav-link">Actions</a>} key="3" />
      </Tabs>
    </div>
  )
}

HeaderTabbed.defaultProps = {
  data: {
    title: 'Pills',
  },
}

export default HeaderTabbed
