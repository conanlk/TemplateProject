import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import MenuPages from './MenuPages'
import Status from './Status'
import LanguageSwitcher from './LanguageSwitcher'
import Actions from './Actions'
import UserMenu from './UserMenu'
import Cart from './Cart'
import style from './style.module.scss'

const mapStateToProps = ({ settings }) => ({ settings })

const MenuSimply = ({ settings: { logo, version, menuColor } }) => {
  console.log(menuColor)
  return (
    <div
      className={classNames(style.menuSimply, {
        [style.menuSimply__white]: menuColor === 'white',
        [style.menuSimply__gray]: menuColor === 'gray',
      })}
    >
      <div className={`${style.menuSimply__logo} d-none d-md-block`}>
        <div className={style.menuSimply__logo__letter}>
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
        <div className={style.menuSimply__logo__name}>{logo}</div>
        <div className={style.menuSimply__logo__descr}>{version}</div>
      </div>
      <div className="mr-auto d-block">
        <MenuPages />
      </div>
      <div className="mr-3 d-xl-block d-none">
        <Status />
      </div>
      <div className="mr-3 d-none d-md-block">
        <Cart />
      </div>
      <div className="mr-3 d-none d-md-block">
        <Actions />
      </div>
      <div className="mr-3 d-none d-md-block">
        <LanguageSwitcher />
      </div>
      <div className="d-none d-md-block">
        <UserMenu />
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(MenuSimply)
