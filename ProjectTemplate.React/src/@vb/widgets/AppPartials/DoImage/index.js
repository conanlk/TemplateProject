import React from 'react'

const DoImage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="card text-center">
            <div className="card-header border-bottom pt-3 pb-3">
              <div className="text-uppercase text-dark font-weight-bold">Ubuntu</div>
            </div>
            <div className="card-body pt-3 pb-3">
              <div className="text-center text-gray-5">18.04 x86</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="card text-center bg-light border-blue">
            <div className="card-header border-bottom pt-3 pb-3">
              <div className="text-uppercase text-dark font-weight-bold">Freebsd</div>
            </div>
            <div className="card-body pt-3 pb-3">
              <div className="text-center text-gray-5">18.04 x86</div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="card text-center">
            <div className="card-header border-bottom pt-3 pb-3">
              <div className="text-uppercase text-dark font-weight-bold">Fedora</div>
            </div>
            <div className="card-body pt-3 pb-3">
              <div className="text-center text-gray-5">18.04 x86</div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="card text-center">
            <div className="card-header border-bottom pt-3 pb-3">
              <div className="text-uppercase text-dark font-weight-bold">Debian</div>
            </div>
            <div className="card-body pt-3 pb-3">
              <div className="text-center text-gray-5">18.04 x86</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoImage
