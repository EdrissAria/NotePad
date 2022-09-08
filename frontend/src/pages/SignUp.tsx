import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import ErrorText from '../components/errorMessage'
import {Link} from 'react-router-dom'

function SignUp() {
    const initailValues = { firstname: '', lastname: '', password: '', confirm: '' };
    const loginSchema = yup.object({
        firstname: yup.string().required().min(3),
        lastname: yup.string().required().min(3),
        password: yup.string().required().min(4),
        confirm: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'password must match!')
    })
    const onSubmit = (values: Object) => {
        console.log(values)
    }
    return (
        <div className='container d-flex justify-content-center align-items-center mt-5'>
            <div className='w-50 h-50 mt-5 p-3 rounded shadow-lg'>
                <p className='fs-1 text-black-50 text-center'>Sign Up</p>
                <Formik
                    initialValues={initailValues}
                    validationSchema={loginSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-user fs-4 m-3'></i>
                            <Field type="text" name="firstname" placeholder='First name' className='form-control' />
                        </div>
                        <div className='mx-5'>
                            <ErrorMessage name="firstname" component={ErrorText}/>
                        </div>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-user fs-4 m-3'></i>
                            <Field type="text" name="lastname" placeholder='Last name' className='form-control' />
                        </div>
                        <div className='mx-5'>
                            <ErrorMessage name="lastname" component={ErrorText}/>
                        </div>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-lock fs-4 m-3'></i>
                            <Field type="password" name="password" placeholder='password' className='form-control' />
                        </div>
                        <div className='mx-5'>
                            <ErrorMessage name="password" component={ErrorText}/>
                        </div>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-unlock fs-4 m-3'></i>
                            <Field type="password" name="confirm" placeholder='confirm password' className='form-control' />
                        </div>
                        <div className='mx-5'>
                            <ErrorMessage name="confirm" component={ErrorText}/>
                        </div>
                        <div className="text-center mt-2">
                            <button type="submit" className='btn btn-info text-white mt-2 px-4 align-self-center'>Sign Up</button>
                        </div>
                        <Link to="/login" className="text-info text-decoration-none d-block text-center fs-4 p-3">have an acount</Link>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default SignUp 
