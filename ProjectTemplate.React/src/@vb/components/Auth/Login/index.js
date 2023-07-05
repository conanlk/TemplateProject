import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Radio, Form, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
  logo: settings.logo,
  version: settings.version,
})

const Login = ({ dispatch, user, authProvider, logo, version }) => {
  const onFinish = (values) => {
    dispatch({
      type: 'user/LOGIN',
      payload: values,
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const changeAuthProvider = (value) => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'authProvider',
        value,
      },
    })
  }

  return (
    <div>
      <div className="pt-2 pb-5 text-center">
        <div className={style.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            version="1.1"
            height="24px"
            width="24px"
          >
            <g>
              <path
                fill="#4b7cf3"
                strokeWidth="1"
                stroke="#4b7cf3"
                d="M12,10.9c-0.1,0-0.2,0-0.2-0.1L3.5,6.1C3.4,6,3.3,5.8,3.3,5.6c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4S20.6,6,20.5,6.1l-8.2,4.7C12.2,10.8,12.1,10.9,12,10.9z M4.8,5.6L12,9.8l7.2-4.2L12,1.5      L4.8,5.6z"
              />
              <path
                fill="#4b7cf3"
                strokeWidth="1"
                stroke="#4b7cf3"
                d="M13.6,23.6c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-0.2-0.3-0.2-0.4v-9.5c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.3,0.4l-8.2,4.7C13.8,23.6,13.7,23.6,13.6,23.6z M14.1,13.9v8.3l7.2-4.2V9.8      L14.1,13.9z"
              />
              <path
                fill="#4b7cf3"
                strokeWidth="1"
                stroke="#4b7cf3"
                d="M10.4,23.6c-0.1,0-0.2,0-0.2-0.1l-8.2-4.7c-0.2-0.1-0.3-0.3-0.3-0.4V8.9c0-0.2,0.1-0.3,0.2-0.4c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.2,0.4C10.5,23.6,10.5,23.6,10.4,23.6z M2.7,18.1l7.2,4.2v-8.3L2.7,9.8      V18.1z"
              />
            </g>
          </svg>
        </div>
        <h1>
          <strong className={style.mainLogo}>{logo}</strong>
          <span className={style.version}>{version}</span>
        </h1>
      </div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-32 mb-3">Sign In</div>
        <div className="mb-4">
          Login and password
          <br />
          <strong>demo@visualbuilder.cloud / VisualBuilder</strong>
        </div>
        <div className="mb-4">
          <Radio.Group onChange={(e) => changeAuthProvider(e.target.value)} value={authProvider}>
            <Radio value="jwt">JWT</Radio>
            <Radio value="firebase">Firebase</Radio>
            <Tooltip title="Read Docs Guide">
              <Radio value="Auth0" disabled>
                Auth0
              </Radio>
            </Tooltip>
            <Tooltip title="Read Docs Guide">
              <Radio value="Strapi" disabled>
                Strapi
              </Radio>
            </Tooltip>
          </Radio.Group>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
          initialValues={{ email: 'demo@visualbuilder.cloud', password: 'VisualBuilder' }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Button
            type="primary"
            className="text-center w-100 btn btn-success"
            htmlType="submit"
            loading={user.loading}
          >
            <strong>Sign in</strong>
          </Button>
        </Form>
        <Link to="/auth/forgot-password" className="vb__utils__link">
          Forgot Password?
        </Link>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Don&#39;t have an account?</span>
        <Link to="/auth/register" className="vb__utils__link">
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
