import React from 'react'

const Footer = ({ data }) => {
  return (
    <div>
      <a className={`${data.mainType} btn mr-2`}>{data.mainTitle}</a>
      <a className="btn btn-link">{data.additionalTitle}</a>
    </div>
  )
}

Footer.defaultProps = {
  data: {
    mainTitle: 'Save',
    mainType: 'btn-primary',
    additionalTitle: 'Cancel',
  },
}

export default Footer
