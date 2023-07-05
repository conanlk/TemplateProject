import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({ data }) => {
  return (
    <div>
      <Button type={data.type}>{data.title}</Button>
    </div>
  )
}

ButtonComponent.defaultProps = {
  data: {
    title: 'Save',
    type: 'primary',
  },
}

export default ButtonComponent
