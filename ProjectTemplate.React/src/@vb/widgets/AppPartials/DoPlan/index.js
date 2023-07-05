import React from 'react'

const DoPlan = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-light border-blue">
            <div className="card-body pt-3 pb-3">
              <div className="text-uppercase text-dark text-center font-weight-bold">Starter</div>
              <div className="text-center text-blue">
                <div className="font-weight-bold font-size-24">Standard Plan</div>
                <div>$0.060 /hour</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body pt-3 pb-3">
              <div className="text-uppercase text-dark text-center font-weight-bold">
                Performance
              </div>
              <div className="text-center text-blue">
                <div className="font-weight-bold font-size-24">General Purpose</div>
                <div>$0.060 /hour</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body pt-3 pb-3">
              <div className="text-uppercase text-dark text-center font-weight-bold">Pro</div>
              <div className="text-center text-blue">
                <div className="font-weight-bold font-size-24">CPU Optimized</div>
                <div>$0.060 /hour</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoPlan
