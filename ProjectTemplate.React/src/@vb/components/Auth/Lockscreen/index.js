import React from 'react'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const Lockscreen = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="mt-5 pt-2">
      <div className={`card ${style.container}`}>
        <div className="text-dark text-center font-size-32 mb-3">Account Locked</div>
        <div className="text-center">
          <div className="vb__utils__avatar vb__utils__avatar--size64 d-inline-block mb-2">
            <img src="resources/images/avatars/2.jpg" alt="Mary Stanform" />
          </div>
          <div className="font-size-18 text-dark mb-4">
            <strong>Mary Stanform</strong>
          </div>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="text-center w-100">
            <strong>Unlock Account</strong>
          </Button>
        </Form>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Already have an account?</span>
        <Link to="/auth/login" className="vb__utils__link">
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default Lockscreen
