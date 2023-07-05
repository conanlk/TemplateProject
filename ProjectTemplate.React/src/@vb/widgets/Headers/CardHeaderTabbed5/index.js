import React from 'react'
import { Tabs } from 'antd'

const HeaderTabbed = ({ data }) => {
  return (
    <div className="card-header-flex">
      <div className="d-flex flex-row align-items-center mr-auto">
        <h5 className="mb-0">
          <i className={`${data.icon} mr-1 font-size-18 text-muted`} />
          <strong>{data.title}</strong>
        </h5>
      </div>
      <Tabs defaultActiveKey="1" className="vb-tabs-bold">
        <Tabs.TabPane
          tab={
            <span>
              <i className="fe fe-align-left mr-1" />
              Left
            </span>
          }
          key="1"
        />
        <Tabs.TabPane
          tab={
            <span>
              <i className="fe fe-align-center mr-1" />
              Center
            </span>
          }
          key="2"
        />
        <Tabs.TabPane
          tab={
            <span>
              <i className="fe fe-align-right mr-1" />
              Right
            </span>
          }
          key="3"
        />
      </Tabs>
    </div>
  )
}

HeaderTabbed.defaultProps = {
  data: {
    title: 'With icon',
    icon: 'fe fe-activity',
  },
}

export default HeaderTabbed
