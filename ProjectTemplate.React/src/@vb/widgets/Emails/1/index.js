import React from 'react'

const Email = () => {
  return (
    <div>
      <div
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
                    <p>Hi there,</p>
                    <p>
                      Sometimes you just want to send a simple HTML email with a simple design and
                      clear call to action.
                    </p>
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
                      Call To Action
                    </a>
                    <p>
                      This is a really simple email template. It&apos;s sole purpose is to get the
                      recipient to click the button with no distractions.
                    </p>
                    <p>Good luck! Hope it works.</p>
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
              <a
                style={{
                  color: '#a09bb9',
                  textDecoration: 'underline',
                }}
              >
                Unsubscribe
              </a>
              <br />
              Powered by Visual Builder
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Email
