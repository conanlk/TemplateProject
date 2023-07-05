import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({ data }) => {
  return (
    <div>
      <Button type={data.mainType} className="mr-4">
        {data.mainTitle}
      </Button>
      <a href="#" onClick={(e) => e.preventDefault()} className="vb__utils__link">
        {data.additionalTitle}
      </a>
    </div>
  )
}

ButtonComponent.defaultProps = {
  data: {
    mainTitle: 'Update',
    mainType: 'primary',
    additionalTitle: 'Cancel',
  },
}

export default ButtonComponent
