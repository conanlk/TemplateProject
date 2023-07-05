import React from 'react'

const Heading = ({ data }) => {
  return (
    <div className="vb__utils__heading">
      <strong>{data.title}</strong>
    </div>
  )
}

Heading.defaultProps = {
  data: {
    title: 'Basic page header',
  },
}

export default Heading
