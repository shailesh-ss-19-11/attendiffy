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
        <div class="container mt-4">
            <form onSubmit={handleSubmit} class="p-4 border rounded shadow-sm bg-white">

                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        name="name"
                        onChange={handleChange}
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        name="email"
                        onChange={handleChange}
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Phone</label>
                    <input
                        type="text"
                        class="form-control"
                        name="phone"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" class="btn btn-primary w-100">
                    Submit
                </button>
            </form>
        </div>

    )
}

export default CreateHod