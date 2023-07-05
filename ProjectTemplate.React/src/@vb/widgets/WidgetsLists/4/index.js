import React from 'react'
import style from './style.module.scss'
import defaultData from './data.json'

const List4 = ({ data = defaultData }) => {
  return (
    <div>
      <ul className="list-unstyled mb-0">
        {data.map((item, index) => (
          <li key={index} className={style.item}>
            <div className={`${style.itemHead} mb-3`}>
              <div className={style.itemPic}>
                <img src={item.avatar} alt="Mary Stanform" />
              </div>
              <div className="mr-2">
                <div>{item.name}</div>
                <div className="text-muted">{item.position}</div>
              </div>
              {item.active && <div className="text-success ml-auto">Active</div>}
              {!item.active && <div className="text-danger ml-auto">Suspended</div>}
            </div>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List4
