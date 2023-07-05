import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import Sidebar from '@vb/components/Sidebar'
import SupportChat from '@vb/components/SupportChat'
import style from './style.module.scss'

const mapStateToProps = ({ settings }) => ({
  logo: settings.logo,
  isGrayTopbar: settings.isGrayTopbar,
  isCardShadow: settings.isCardShadow,
  isSquaredBorders: settings.isSquaredBorders,
  isBorderless: settings.isBorderless,
  authPagesColor: settings.authPagesColor,
  isAuthTopbar: settings.isAuthTopbar,
})

const AuthLayout = ({
  children,
  logo,
  isGrayTopbar,
  isCardShadow,
  isSquaredBorders,
  isBorderless,
  authPagesColor,
  isAuthTopbar,
}) => {
  return (
    <Layout className="vb__layout">
      <Layout.Content>
        <Sidebar />
        <SupportChat />
        <div
          className={classNames(`${style.container}`, {
            vb__layout__squaredBorders: isSquaredBorders,
            vb__layout__cardsShadow: isCardShadow,
            vb__layout__borderless: isBorderless,
            [style.white]: authPagesColor === 'white',
            [style.gray]: authPagesColor === 'gray',
          })}
          style={{
            backgroundImage:
              authPagesColor === 'image' ? 'url(resources/images/content/photos/8.jpeg)' : '',
          }}
        >
          {isAuthTopbar && (
            <div
              className={classNames(`${style.topbar}`, {
                [style.topbarGray]: isGrayTopbar,
              })}
            >
              <div className={style.logoContainer}>
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
                  <div className={style.name}>{logo}</div>
                </div>
              </div>
              <div className="d-none d-sm-block">
                <span className="mr-2">Don&#39;t have an account?</span>
                <Link to="/auth/register" className="font-size-16 vb__utils__link">
                  Sign up
                </Link>
              </div>
            </div>
          )}
          <div className="mb-5">{children}</div>
          <div className="mt-auto pb-5 pt-5">
            <ul
              className={`${style.footerNav} list-unstyled d-flex mb-0 flex-wrap justify-content-center`}
            >
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Support
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Contacts
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Advertising
                </a>
              </li>
            </ul>
            <div className="text-center">
              Copyright © {new Date().getFullYear()}{' '}
              {' | '}
              <a href="https://sellpixels.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default withRouter(connect(mapStateToProps)(AuthLayout))
