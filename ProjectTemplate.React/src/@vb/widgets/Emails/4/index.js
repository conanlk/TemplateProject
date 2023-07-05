import React from 'react'

const Email = () => {
  return (
    <div>
      <div
        width="100%"
        style={{
          background: '#eceff4',
          padding: '50px 20px',
          color: '#514d6a',
          borderRadius: '5px',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0px auto', fontSize: '14px' }}>
          <table
            cellPadding="0"
            cellSpacing="0"
            style={{ width: '100%', marginBottom: '20px', border: '0px' }}
          >
            <tbody>
              <tr>
                <td style={{ verticalAlign: 'top' }}>
                  <h4>
                    <img
                      src="/logo.svg"
                      alt="Visual Vuilder"
                      style={{ height: '40px', marginRight: '10px' }}
                    />
                    <strong>Visual Builder</strong>
                  </h4>
                </td>
                <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>
                  <span style={{ color: '#a09bb9' }}>Some Description</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ padding: '40px 40px 20px 40px', background: '#fff' }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: '100%', border: '0px' }}>
              <tbody>
                <tr>
                  <td>
                    <div
                      style={{
                        padding: '15px 30px',
                        background: '#46be8a',
                        borderRadius: '5px',
                        marginBottom: '20px',
                        color: '#fff',
                      }}
                    >
                      Success! Something good happened.
                    </div>
                    <div
                      style={{
                        padding: '15px 30px',
                        background: '#fb434a',
                        borderRadius: '5px',
                        marginBottom: '20px',
                        color: '#fff',
                      }}
                    >
                      Error! Something bad happened.
                    </div>
                    <div
                      style={{
                        padding: '15px 30px',
                        background: '#fff',
                        border: '1px solid #acb7bf',
                        borderRadius: '5px',
                        marginBottom: '20px',
                      }}
                    >
                      Information! Something neutral happened.
                    </div>
                    <p>Hi George,</p>
                    <p>Congratulations! Something good has appened.</p>
                    <div style={{ textAlign: 'center' }}>
                      <a
                        style={{
                          display: 'inline-block',
                          padding: '11px 30px 6px',
                          margin: '20px 0px 30px',
                          fontSize: '15px',
                          color: '#fff',
                          background: '#01a8fe',
                          borderRadius: '5px',
                        }}
                      >
                        Take Action Now
                      </a>
                    </div>
                    <p>Thanks for being great customer. Let it be!</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '12px',
              color: '#a09bb9',
              marginTop: '20px',
            }}
          >
            <p>
              Sellpixels.com LTD., Abbey Road, San Francisco CA 94102
              <br />
              Don&apos;t like these emails?{' '}
              <a style={{ color: '#a09bb9', textDecoration: 'underline' }}>Unsubscribe</a>
              <br />
              Powered by Visaul Builder
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Email
