import React from 'react'

const GithubHead = () => {
  return (
    <div>
      <div className="d-flex flex-xs-wrap border-bottom">
        <div className="mr-auto pr-3">
          <div className="text-dark font-size-24 font-weight-bold mb-2">
            [Feature Request] How to enable custom font that comes from svg #2460
          </div>
          <div className="mb-3">
            <span className="mr-3 text-uppercase badge badge-success">Open</span>
            <a className="font-weight-bold" href="#" onClick={(e) => e.preventDefault()}>
              zxs2162
            </a>
            wrote this issue 12 days ago · 0 comments
          </div>
        </div>
        <a
          className="btn btn-success align-self-start text-nowrap"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          New Issue
        </a>
      </div>
    </div>
  )
}

export default GithubHead
