import React from 'react'
import { Tooltip } from 'antd'
import { iconsData } from './data.json'

const IconsFontawesome = () => {
  return (
    <div className="row">
      <div className="col-xl-6 offset-xl-3">
        {iconsData.map((iconsSet) => (
          <div className="text-center" key={iconsSet.setName}>
            <h3 className="text-block mt-5 mb-4">
              <strong>{iconsSet.setName}</strong>
            </h3>
            <ul className="vb__utils__iconPresent list-unstyled">
              {iconsSet.icons.map((icon) => (
                <Tooltip title={`fa ${icon}`} key={icon}>
                  <li>
                    <i className={`fa ${icon}`} />
                  </li>
                </Tooltip>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IconsFontawesome
