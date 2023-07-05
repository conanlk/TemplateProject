import React from 'react'

const Footer = ({ data }) => {
  return (
    <div>
      <a className={`${data.mainType} btn mr-2`}>
        <i className={`${data.mainIcon} mr-2`} />
        {data.mainTitle}
      </a>
      <a className="btn btn-link">{data.additionalTitle}</a>
    </div>
  )
}

Footer.defaultProps = {
  data: {
    mainTitle: 'Unlock Account',
    mainIcon: 'fe fe-lock',
    mainType: 'btn-success',
    additionalTitle: 'Cancel',
  },
}

export default Footer
