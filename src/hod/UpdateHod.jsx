import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateHod = () => {

  const [inputs, setInputs] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      delete inputs["createdAt"];
      delete inputs["updatedAt"];
      delete inputs["id"];
      console.log(inputs, "inputs");
      const response = await axios.put("http://localhost:3000/api/admin/hod/" + params?.id, inputs);
      if (response.status === 200) {
        navigate(-1);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const existingData = { ...inputs };
    existingData[name] = value;
    setInputs(existingData);
  }

  const fetchSingleHod = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/admin/hod/" + params?.id);
      if (response.status === 200) {
        setInputs(response.data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchSingleHod()
  }, [])

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={inputs?.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={inputs?.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={inputs?.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>

  )
}

export default UpdateHod