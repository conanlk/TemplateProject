import React from 'react'
import { Tabs } from 'antd'
import { Editor } from 'react-draft-wysiwyg'

const GithubDiscuss = () => {
  return (
    <div>
      <div className="d-flex align-items-start">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="vb__utils__avatar vb__utils__avatar--size50 mr-3 flex-shrink-0"
        >
          <img src="resources/images/avatars/4.jpg" alt="Mary Stanform" />
        </a>
        <div className="card card-skip flex-grow-1">
          <Tabs className="vb-tabs-bordered pt-2 px-3" defaultActiveKey="1">
            <Tabs.TabPane tab="Write" key="1" />
            <Tabs.TabPane tab="Preview" key="2" />
          </Tabs>
          <div>
            <Editor
              toolbarClassName="border-0 px-3"
              editorClassName="px-3"
              editorStyle={{
                height: 100,
                overflow: 'auto',
              }}
            />
          </div>
          <div className="card-body border-top py-2 px-3">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="btn btn-success btn-with-addon text-nowrap ml-3 my-3"
            >
              <span className="btn-addon">
                <i className="btn-addon-icon fe fe-plus-circle" />
              </span>
              Add Comment
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubDiscuss
