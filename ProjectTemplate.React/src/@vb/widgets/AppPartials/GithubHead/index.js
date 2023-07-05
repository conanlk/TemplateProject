import React from 'react'
import { Tabs } from 'antd'

const GithubHead = () => {
  return (
    <div>
      <div className="d-flex flex-wrap">
        <div className="mr-auto pr-3 my-2">
          <i className="fe fe-book font-size-21 mr-2" />
          <div className="text-nowrap d-inline-block font-size-18 text-dark">
            <a className="font-size-18 text-blue" href="#" onClick={(e) => e.preventDefault()}>
              umijs
            </a>{' '}
            /
            <a className="font-size-18 text-blue" href="#" onClick={(e) => e.preventDefault()}>
              umi
            </a>
          </div>
        </div>
        <div className="d-flex flex-wrap font-size-16">
          <div className="mr-3 my-2 text-nowrap">
            <i className="fe fe-user-check font-size-21 mr-1" />
            Watch
            <strong className="text-dark font-size-18 ml-1">6,870</strong>
          </div>
          <div className="mr-3 my-2 text-nowrap">
            <i className="fe fe-star font-size-21 mr-1" />
            Star
            <strong className="text-dark font-size-18 ml-1">16,356</strong>
          </div>
          <div className="mr-3 my-2 text-nowrap">
            <i className="fe fe-copy font-size-21 mr-1" />
            Fork
            <strong className="text-dark font-size-18 ml-1">569</strong>
          </div>
        </div>
      </div>
      <Tabs className="vb-tabs-bordered" defaultActiveKey="1">
        <Tabs.TabPane tab="Code" key="1" />
        <Tabs.TabPane
          tab={
            <span>
              Issues <strong>(85)</strong>
            </span>
          }
          key="2"
        />
        <Tabs.TabPane
          tab={
            <span>
              Pull requests <strong>(4)</strong>
            </span>
          }
          key="3"
        />
        <Tabs.TabPane tab="Security" key="4" />
        <Tabs.TabPane tab="Insights" key="5" />
      </Tabs>
    </div>
  )
}

export default GithubHead
