import React from 'react'
import HodTable from './HodTable'

const Hod = () => {
    
    const arr = [
        { id: 1, name: "teacher1", email: "teacher1@gmail.com", mobile: "987654321" },
        { id: 2, name: "teacher2", email: "teacher2@gmail.com", mobile: "987654322" },
        { id: 3, name: "teacher3", email: "teacher3@gmail.com", mobile: "987654323" },
        { id: 4, name: "teacher4", email: "teacher4@gmail.com", mobile: "987654324" },
        { id: 5, name: "teacher5", email: "teacher5@gmail.com", mobile: "987654325" },
        { id: 6, name: "teacher6", email: "teacher6@gmail.com", mobile: "987654326" }
    ]
    return (
        <div>
            <button className='btn btn-sm btn-primary'>Add Hod</button>
           <HodTable arr={arr}/>
        </div>
    )
}

export default Hod