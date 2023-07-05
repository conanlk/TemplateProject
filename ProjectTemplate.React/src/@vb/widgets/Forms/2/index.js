import React from 'react'
import { Form, Input } from 'antd'

const Form2 = () => {
  return (
    <Form layout="inline">
      <Form.Item name="budget2" className="mb-1 mt-1">
        <Input placeholder="Coins Amount" addonBefore="$" addonAfter=".00" />
      </Form.Item>
      <Form.Item name="budget3" className="mb-1 mt-1">
        <Input placeholder="8 Digit Pin" addonBefore="$" />
      </Form.Item>
      <button type="button" className="btn btn-success mt-1 mb-1">
        Confirm Transaction
      </button>
    </Form>
  )
}

export default Form2
