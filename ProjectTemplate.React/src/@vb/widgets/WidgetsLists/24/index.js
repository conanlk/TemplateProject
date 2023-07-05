import React, { useState } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import items from './data.json'
import style from './style.module.scss'

const List24 = () => {
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
          placeholder="Search lists..."
        />
      </div>
      <h5 className="mb-2">
        <strong>To Do Lists</strong>
      </h5>
      <div className="d-flex flex-column">
        {items.map((item, index) => (
          <a
            href="#"
            onClick={(e) => changeDialog(e, index)}
            key={item.name}
            className={`${style.item} ${
              index === activeIndex ? style.current : ''
            } text-dark font-size-18`}
          >
            <span className="text-truncate mr-1">{item.name}</span>
            {item.count && <span>({item.count})</span>}
          </a>
        ))}
      </div>
    </div>
  )
}

export default List24
