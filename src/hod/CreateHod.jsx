import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateHod = () => {
    const navigate = useNavigate()

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object({
        name: Yup.string().max(50).required("Name is Required"),
        email: Yup.string().email().max(50).required("Email is required"),
        phone: Yup.string().matches(phoneRegExp, "Phone number is not valid")
    })

    const formik = useFormik({
        validationSchema,
        initialValues: {
            name: "",
            email: "",
            phone: null
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post("http://localhost:3000/api/admin/hod", values);
                if (response.status >= 200 && response.status < 300) {
                    navigate("/hod")
                }
            } catch (err) {
                console.log(err);
            }
        }
    })


    return (
        <div class="container mt-4">

            <div class="mb-3">
                <label class="form-label">Name</label>
                <input
                    name="name"
                    value={formik.values.name}
                    type="text"
                    class="form-control"
                    onChange={formik.handleChange}
                />
                <p className='text-danger'>{formik.touched && formik.errors.name}</p>
            </div>


            <div class="mb-3">
                <label class="form-label">Email</label>
                <input
                    name="email"
                    value={formik.values.email}
                    type="email"
                    class="form-control"
                    onChange={formik.handleChange}

                />
                <p className='text-danger'>{formik.touched.email && formik.errors.email}</p>
            </div>

            <div class="mb-3">
                <label class="form-label">Phone</label>
                <input
                    name="phone"
                    value={formik.values.phone}
                    type="text"
                    class="form-control"
                    onChange={formik.handleChange}
                    required
                />
                <p className='text-danger'>{formik.touched.phone && formik.errors.phone}</p>
            </div>

            <button onClick={formik.submitForm} class="btn btn-primary w-100">
                Submit
            </button>
        </div>

    )
}

export default CreateHod