import React from 'react'

const Typography = () => {
  return (
    <div>
      <dl className="row">
        <dt className="col-sm-3">Description lists</dt>
        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

        <dt className="col-sm-3">Euismod</dt>
        <dd className="col-sm-9">
          Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
        </dd>
        <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

        <dt className="col-sm-3">Malesuada porta</dt>
        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
        <dd className="col-sm-9">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus.
        </dd>

        <dt className="col-sm-3">Malesuada porta</dt>
        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
      </dl>
    </div>
  )
}

export default Typography
