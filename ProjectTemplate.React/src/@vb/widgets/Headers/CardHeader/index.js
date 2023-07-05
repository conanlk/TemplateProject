import React from 'react'

const Header = ({ data }) => {
  return (
    <h5 className="mb-0">
      <strong>{data.title}</strong>
    </h5>
  )
}

Header.defaultProps = {
  data: {
    title: 'Basic header',
  },
}

export default Header
