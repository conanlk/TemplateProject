import React from 'react'
import { MailOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons'
import { Input, Button, Upload, Form } from 'antd'

const { TextArea } = Input

const WpWrite = () => {
  return (
    <div>
      <div className="d-flex align-items-start flex-wrap border-bottom mb-3 pb-3">
        <div className="vb__utils__avatar vb__utils__avatar--size64 mr-3 mb-3 flex-shrink-0">
          <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
        </div>
        <div className="mb-3">
          <div className="font-weight-bold font-size-16 text-dark">Trinity Parson</div>
          <p className="font-italic">
            “I hope you enjoy reading this as much as I enjoyed writing this.”
          </p>
          <a href="#" className="btn btn-sm btn-primary">
            View Profile
          </a>
        </div>
      </div>
      <h5 className="text-dark mb-4">Leave a comment</h5>
      <Form>
        <Form.Item name="userName">
          <Input
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Your name"
          />
        </Form.Item>
        <Form.Item name="mail">
          <Input
            prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Your email"
          />
        </Form.Item>
        <Form.Item name="message">
          <TextArea rows={3} placeholder="Your message" />
        </Form.Item>
        <Form.Item>
          <Button className="mr-2" type="primary" style={{ width: 200 }}>
            <i className="fa fa-send mr-2" />
            Send
          </Button>
          <Upload>
            <Button>
              <UploadOutlined />
              Attach File
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </div>
  )
}

export default WpWrite
