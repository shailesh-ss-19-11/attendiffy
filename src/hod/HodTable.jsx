import React from 'react'

const HodTable = (props) => {
  const { hodList, deleteRow } = props;
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
          {hodList?.length > 0 ?
            hodList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button className='btn btn-sm btn-primary mx-1'>Edit</button>
                    <button className='btn btn-sm btn-danger mx-1' onClick={() => deleteRow(item.id)}>Delete</button>
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