import React, { useState } from 'react'
import ListItem from './ListItem';

const SideBar = (props) => {
    const { selectedlink, setselectedlink, liItem } = props;
    return (
        <div className=''>
            <h1 className='text-center'>Attendify </h1>
            <hr />
            <div>
                <ul className='list-unstyled sidebar-links'>
                    {liItem && liItem.map((element, index) => <ListItem key={index} setselectedlink={setselectedlink} selector={element} selectedlink={selectedlink} />)}
                    <li>Attendance</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar