import React from 'react'
import { Tabs } from 'antd'

const HeaderTabbed = () => {
  return (
    <div className="card-header-flex">
      <Tabs defaultActiveKey="1" className="vb-tabs-bold">
        <Tabs.TabPane tab="History" key="1" />
        <Tabs.TabPane tab="Information" key="2" />
        <Tabs.TabPane tab="Actions" key="3" />
      </Tabs>
    </div>
  )
}

export default HeaderTabbed
