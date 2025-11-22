import React, { useEffect, useState } from 'react'
import HodTable from './HodTable'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Hod = () => {
    const navigate = useNavigate();
    const [hodList,setHodList] = useState([]);

    const fetchHodData = async () => {
        try{
            const response = await axios.get('http://localhost:3000/api/admin/hod');
            if(response.status===200){
                setHodList(response.data);
            }else{
                setHodList([]);
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchHodData();
    },[])

    const deleteRow = async(id) => {
        try{
            const response = await axios.delete("http://localhost:3000/api/admin/hod/"+id);
            if(response.status===200){
                fetchHodData();
            }
        }catch(err){
            console.log(err);
        }
    }
    
    
    return (
        <div>
            <button className='btn btn-sm btn-primary' onClick={()=>navigate("/hod/create-hod")}>Add Hod</button>
            <HodTable hodList={hodList} deleteRow={deleteRow} />
        </div>
    )
}

export default Hod