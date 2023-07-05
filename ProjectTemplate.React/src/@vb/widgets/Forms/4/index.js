import React, { useState } from 'react'
import { Button, Form, Input, Select } from 'antd'

const { Option } = Select

const Form4 = () => {
  const [confirmDirty, setConfirmDirty] = useState(false)
  const handleConfirmBlur = (e) => {
    const { value } = e.target
    setConfirmDirty(confirmDirty || !!value)
  }

  return (
    <Form layout="vertical">
      <Form.Item name="fullname" label="Username">
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender">
        <Select placeholder="Select a option and change input text above">
          <Option value="male">male</Option>
          <Option value="female">female</Option>
        </Select>
      </Form.Item>
      <Form.Item name="email" label="E-mail">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" hasFeedback>
        <Input.Password />
      </Form.Item>
      <Form.Item name="confirm" label="Confirm Password" hasFeedback>
        <Input.Password onBlur={handleConfirmBlur} />
      </Form.Item>
      <div className="border-top pt-4">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
}

export default Form4
