import React from 'react'

const GithubDiscuss = () => {
  return (
    <div>
      <div className="d-flex align-items-start">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="vb__utils__avatar vb__utils__avatar--size50 mr-3 flex-shrink-0"
        >
          <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
        </a>
        <div className="card card-skip flex-grow-1">
          <div className="card-header border-bottom">
            <a className="font-weight-bold" href="#" onClick={(e) => e.preventDefault()}>
              zxs2162
            </a>{' '}
            wrote this issue 12 days ago · 0 comments
          </div>
          <div className="card-body">
            <h3>Steps to Reproduce</h3>
            <ol>
              <li>Have hydrogen active and setup properly</li>
              <li>
                Use <code>Run Cell</code> command from hydrogen on the code below with about 50
                extra new lines
              </li>
            </ol>
            <pre>
              <code>for i in range(1000): print(i)</code>
            </pre>
            <ol start="3">
              <li>Scroll down the editor</li>
              <li>Scroll back up the editor</li>
            </ol>
            <p>
              <strong>Expected behavior:</strong> Everything to look the same
            </p>
            <p>
              <strong>Actual behavior:</strong> Scroll top of the result view has been set to 0 upon
              removal and adding back to the active DOM
            </p>
            <p>
              <strong>Reproduces how often:</strong> 100% of the time
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubDiscuss
