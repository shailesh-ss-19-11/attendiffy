import React, { useState } from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { Outlet } from 'react-router-dom';

const LayOut = () => {
  const [selectedlink, setselectedlink] = useState("");
  const liItem = ['hod', 'teacher', 'branches', 'student'];
  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-2 border-end">
        <SideBar selectedlink={selectedlink} setselectedlink={setselectedlink} liItem={liItem}/>
      </div>
      <div className="col-10">
        <div>
          <Header selectedlink={selectedlink}/>
          <hr />
        </div>
        <Outlet/>
      </div>
    </div>
  )
}

export default LayOut