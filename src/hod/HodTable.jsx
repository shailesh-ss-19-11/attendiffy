import React from 'react'

const HodTable = (props) => {
  const { arr } = props;
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {arr?.length > 0 ?
            arr.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <button className='btn btn-sm btn-primary mx-1'>Edit</button>
                    <button className='btn btn-sm btn-danger mx-1'>Delete</button>
                  </td>
                </tr>
              )
            })
            : 
            <tr>
                  <td>{"No data found"}</td>
                </tr>
            }


        </tbody>
      </table>
    </div>
  )
}

export default HodTable