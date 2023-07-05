import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import style from './style.module.scss'

const mapStateToProps = ({ settings }) => ({ settings })

const Footer = ({ settings: { isContentMaxWidth, logo, version } }) => {
  return (
    <div
      className={classNames(style.footerDark, {
        [style.footerFullWidth]: !isContentMaxWidth,
      })}
    >
      <div className={`${style.outer} pt-5 pb-4`}>
        <div className={style.container}>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <h5 className="font-weight-bold mb-4">Quick Links</h5>
              <div className="row">
                <div className="col-sm-6">
                  <div className="d-flex flex-column">
                    <a className="mb-1 vb__utils__link" href="#">
                      Documentation
                    </a>
                    <a className="mb-1 vb__utils__link" href="#">
                      Service Rules
                    </a>
                    <a className="mb-1 vb__utils__link" href="#">
                      User Settings
                    </a>
                    <a className="mb-1 vb__utils__link" href="#">
                      Dashboard Setings
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex flex-column mb-4">
                    <a className="mb-1 vb__utils__link" href="#">
                      User Settings
                    </a>
                    <a className="mb-1 vb__utils__link" href="#">
                      Dashboard Settings
                    </a>
                    <a className="mb-1 vb__utils__link" href="#">
                      Documentation
                    </a>
                    <a className="mb-1 vb__utils__link" href="#">
                      Service Rules
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <h5 className="font-weight-bold mb-4">About</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <h5 className="font-weight-bold mb-4">Get In Touch</h5>
              <input
                className={`form-control mb-4 ${style.input}`}
                type="email"
                placeholder="Enter your email"
              />
              <button type="button" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.bottom} py-4`}>
        <div className={style.container}>
          <div className="d-sm-flex align-items-sm-center">
            <div className={`clearfix mr-sm-auto ${style.logo}`}>
              <div className={style.logo__letter}>
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
              <div className={style.logo__name}>{logo}</div>
              <div className={style.logo__descr}>{version}</div>
            </div>
            <div className="d-flex flex-column flex-sm-row">
              <a className="mb-1 mb-sm-0 px-sm-3" href="#">
                About
              </a>
              <a className="mb-1 mb-sm-0 px-sm-3" href="#">
                Terms of Use
              </a>
              <a className="mb-1 mb-sm-0 px-sm-3" href="#">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Footer)
