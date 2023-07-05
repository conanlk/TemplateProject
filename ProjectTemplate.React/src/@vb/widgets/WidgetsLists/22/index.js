import React, { useState } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import dialogs from './data.json'
import style from './style.module.scss'

const List22 = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const changeDialog = (e, index) => {
    e.preventDefault()
    setActiveIndex(index)
  }

  return (
    <div>
      <div className="mb-4">
        <Input
          prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Search users..."
        />
      </div>
      <div>
        {dialogs.map((item, index) => (
          <a
            href="#"
            onClick={(e) => changeDialog(e, index)}
            key={item.name}
            className={`${style.item} ${
              index === activeIndex ? style.current : ''
            } d-flex flex-nowrap align-items-center`}
          >
            <div className="vb__utils__avatar vb__utils__avatar--size46 mr-3 flex-shrink-0">
              <img src={item.avatar} alt={item.name} />
            </div>
            <div className={`${style.info} flex-grow-1`}>
              <div className="text-uppercase font-size-12 text-truncate text-gray-6">
                {item.position}
              </div>
              <div className="text-dark font-size-18 font-weight-bold text-truncate">
                {item.name}
              </div>
            </div>
            <div hidden={!item.unread} className={`${style.unread} flex-shrink-0 align-self-start`}>
              <div className="badge badge-success">{item.unread}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default List22
