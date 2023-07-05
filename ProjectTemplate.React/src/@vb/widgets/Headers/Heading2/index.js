import React from 'react'

const Heading = ({ data }) => {
  return (
    <div className="vb__utils__heading">
      <strong>{data.title}</strong>
      <div className="text-muted font-size-15">{data.description}</div>
    </div>
  )
}

Heading.defaultProps = {
  data: {
    title: 'Header with description',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
}

export default Heading
