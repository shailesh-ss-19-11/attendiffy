import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateHod = () => {
    const navigate = useNavigate()
    const [formInput, setformInput] = useState({ email: "", phone: "", name: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let obj = { ...formInput };
        obj[name] = value
        setformInput(obj);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/admin/hod", formInput);
            if (response.status >= 200 && response.status < 300) {
                navigate("/hod")
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" name='phone' onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateHod