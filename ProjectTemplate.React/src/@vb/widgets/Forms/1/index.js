import React from 'react'
import { Input, Slider, Form } from 'antd'

const Form1 = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  }

  const marks = {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
    70: '70',
    80: '80',
    90: '90',
    100: '100',
  }

  return (
    <Form {...formItemLayout} labelAlign="left">
      <Form.Item name="fullname6" label="Fullname">
        <Input placeholder="Your Fullname..." />
      </Form.Item>
      <Form.Item name="email6" label="Your Email...">
        <Input placeholder="Your Email..." />
      </Form.Item>
      <Form.Item name="budget1" label="Budget" className="mb-3">
        <Input placeholder="Your Budget..." addonBefore="$" />
      </Form.Item>
      <Form.Item name="amount" label="Amount">
        <Slider marks={marks} />
      </Form.Item>
      <button type="submit" className="btn btn-success px-5">
        Send Data
      </button>
    </Form>
  )
}

export default Form1
