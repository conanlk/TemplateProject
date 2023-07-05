import React from 'react'

const Header = ({ data }) => {
  return (
    <div className="card-header-flex">
      <div className="d-flex flex-column justify-content-center mr-auto">
        <div className="d-flex flex-row justify-content-center">
          <h5 className="mb-0 mr-2">
            <i className={`${data.icon} mr-2 font-size-18 text-muted`} />
            <strong>{data.title}</strong>
          </h5>
          <span className="text-muted">{data.description}</span>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  data: {
    title: 'Basic page header',
    icon: 'fe fe-phone-call',
    description: 'Some description here...',
  },
}

export default Header
