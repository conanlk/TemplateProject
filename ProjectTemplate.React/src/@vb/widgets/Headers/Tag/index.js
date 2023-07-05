import React from 'react'

const Tag = ({ data }) => {
  return <div className="badge badge-example">{data.title}</div>
}

Tag.defaultProps = {
  data: {
    title: 'Tag',
  },
}

export default Tag
