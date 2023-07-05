import React from 'react'

const List25 = () => {
  return (
    <div>
      <div className="py-3 border-bottom">
        <div className="font-weight-bold mb-2">Assignees</div>
        <div>No one assigned</div>
      </div>
      <div className="py-3 border-bottom">
        <div className="font-weight-bold mb-2">Labels</div>
        <div>None yet</div>
      </div>
      <div className="py-3 border-bottom">
        <div className="font-weight-bold mb-2">Projects</div>
        <div>None yet</div>
      </div>
      <div className="py-3 border-bottom">
        <div className="font-weight-bold mb-2">Milestone</div>
        <div>No milestone</div>
      </div>
      <div className="py-3 border-bottom">
        <div className="font-weight-bold mb-2">Notifications</div>
        <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-light text-blue mb-2">
          Subscribe
        </a>
        <div>You’re not receiving notifications from this thread.</div>
      </div>
      <div className="py-3">
        <div className="font-weight-bold mb-2">4 participants</div>
        <div className="vb__utils__avatarGroup mb-3">
          <div className="vb__utils__avatar vb__utils__avatar--size46">
            <img src="resources/images/avatars/1.jpg" alt="User 1" />
          </div>
          <div className="vb__utils__avatar vb__utils__avatar--size46">
            <img src="resources/images/avatars/2.jpg" alt="User 2" />
          </div>
          <div className="vb__utils__avatar vb__utils__avatar--size46">
            <img src="resources/images/avatars/3.jpg" alt="User 3" />
          </div>
          <div className="vb__utils__avatar vb__utils__avatar--size46">
            <img src="resources/images/avatars/4.jpg" alt="User 4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List25
