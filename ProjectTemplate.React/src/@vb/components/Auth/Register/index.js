import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const mapStateToProps = ({ user, dispatch }) => ({ user, dispatch })

const Register = ({ dispatch, user }) => {
  const onFinish = (values) => {
    dispatch({
      type: 'user/REGISTER',
      payload: values,
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="mt-5 pt-2">
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-32 mb-3">Create your account</div>
        <div className="mb-4">
          <p>
            And start spending more time on your projects and less time managing your
            infrastructure.
          </p>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your full name' }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="text-center w-100"
            loading={user.loading}
          >
            <strong>Sign up</strong>
          </Button>
        </Form>
        <div>
          <span className="mr-1">By signing up, you agree to the</span>
          <a href="#" onClick={(e) => e.preventDefault()} className="vb__utils__link">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" onClick={(e) => e.preventDefault()} className="vb__utils__link">
            Privacy Policy
          </a>
        </div>
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

export default connect(mapStateToProps)(Register)
