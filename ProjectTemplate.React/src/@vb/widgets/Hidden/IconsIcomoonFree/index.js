import React from 'react'
import { Tooltip } from 'antd'
import { iconsData } from './data.json'

const IconsIcomoonFree = () => {
  return (
    <div className="row">
      <div className="col-xl-6 offset-xl-3">
        <h3 className="text-block mt-5 mb-4 text-center">
          <strong>General Icons</strong>
        </h3>
        <ul className="vb__utils__iconPresent list-unstyled">
          {iconsData.map((icon) => (
            <Tooltip title={icon} key={icon}>
              <li>
                <i className={icon} />
              </li>
            </Tooltip>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default IconsIcomoonFree
