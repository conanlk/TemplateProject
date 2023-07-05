import React from 'react'
import { Form, Cascader, Input, Checkbox, Upload, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

const Form3 = () => {
  const opts = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]

  return (
    <Form layout="vertical">
      <div className="row">
        <div className="col-md-6">
          <Form.Item name="email3" label="E-mail">
            <Input placeholder="Email" />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item name="pass3" label="Password">
            <Input placeholder="Password" />
          </Form.Item>
        </div>
        <div className="col-12">
          <Form.Item name="address3-1" label="Adress">
            <Input placeholder="1234 Main St." />
          </Form.Item>
          <Form.Item name="address3-2" label="Adress 2">
            <Input placeholder="Apartment, studio, or floor" />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item name="city3" label="City">
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item name="state3" label="State">
            <Cascader options={residences} />
          </Form.Item>
        </div>
        <div className="col-md-2">
          <Form.Item name="zip" label="Zip">
            <Input />
          </Form.Item>
        </div>
        <div className="col-12">
          <Form.Item valuePropName="fileList" name="upload3" label="Upload Presentation">
            <Dragger {...opts}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data
                or other band files
              </p>
            </Dragger>
          </Form.Item>
        </div>
        <div className="col-12">
          <Form.Item valuePropName="checked" name="confirm3">
            <Checkbox className="text-uppercase">
              I CONSENT TO HAVING MDTK SOFT COLLECT MY PERSONAL DETAILS.
            </Checkbox>
          </Form.Item>
          <Form.Item name="confirm4">
            <button type="button" className="btn btn-light px-5">
              Sign in
            </button>
          </Form.Item>
        </div>
      </div>
    </Form>
  )
}

export default Form3
