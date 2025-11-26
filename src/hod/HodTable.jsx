import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const HodTable = (props) => {
  const navigate = useNavigate();
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hodList?.length > 0 ?
            hodList.map((hod) => {
              return (
                <tr key={hod.id}>
                  <td>{hod.id}</td>
                  <td>{hod.name}</td>
                  <td>{hod.email}</td>
                  <td>{hod.phone}</td>
                  <td>
                    {/* <Link to={"/hod/update-hod/"+hod.id}><button className='btn btn-sm btn-primary mx-1'>Edit</button></Link> */}
                    <button onClick={()=>navigate("/hod/update-hod/"+hod.id,{state:hod})} className='btn btn-sm btn-primary mx-1'>Edit</button>
                    <button className='btn btn-sm btn-danger mx-1' onClick={() => deleteRow(hod.id)}>Delete</button>
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