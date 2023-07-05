import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({ data }) => {
  return (
    <Button type={data.type} className="btn-with-addon">
      <span className="btn-addon">
        <i className={`btn-addon-icon ${data.icon}`} />
      </span>
      {data.title}
    </Button>
  )
}

ButtonComponent.defaultProps = {
  data: {
    title: 'New Request',
    icon: 'fe fe-plus-circle',
    type: 'primary',
  },
}

export default ButtonComponent
