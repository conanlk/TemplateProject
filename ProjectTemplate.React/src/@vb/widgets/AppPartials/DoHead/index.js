import React from 'react'
import { Tabs } from 'antd'

const DoHead = () => {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center">
        <div className="vb__utils__avatar vb__utils__avatar--size64 flex-shrink-0 mr-4 mb-3">
          <img src="resources/images/avatars/2.jpg" alt="Mary Stanform" />
        </div>
        <div className="mr-auto mb-3">
          <div className="text-dark font-weight-bold font-size-24">
            <span className="mr-3">Visual Builder Group</span>
            <span className="align-middle text-primary text-uppercase font-size-12 badge badge-light">
              Default
            </span>
          </div>
          <div>
            Operational / Developer tooling / Update your project information under Settings
          </div>
        </div>
        <a
          className="btn btn-light btn-lg text-blue font-size-14"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Move Resources →
        </a>
      </div>
      <Tabs className="vb-tabs-bordered" defaultActiveKey="1">
        <Tabs.TabPane tab="Resources" key="1" />
        <Tabs.TabPane tab="Activity" key="2" />
        <Tabs.TabPane tab="Settings" key="3" />
      </Tabs>
    </div>
  )
}

export default DoHead
