import React from 'react'
import data from './data.json'

const Table1 = () => {
  return (
    <div>
      <table className="table table-hover text-nowrap">
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td style={{ width: 25 }}>
                {item.type === 'folder' && <i className="fe fe-folder" />}
                {item.type === 'file' && <i className="fe fe-file" />}
              </td>
              <td>
                <a href="#" className="vb__utils__link" onClick={(e) => e.preventDefault()}>
                  {item.name}
                </a>
              </td>
              <td>{item.info}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table1
