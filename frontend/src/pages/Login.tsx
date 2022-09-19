import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import ErrorText from '../components/errorMessage'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import React from 'react'

function Login() {
    const locate = useLocation();
    console.log('location: ', locate)
    const initailValues = { username: '', password: '' };
    const loginSchema = yup.object({
        username: yup.string().required().min(3),
        password: yup.string().required().min(4)
    })
    const onSubmit = (values: Object) => {
        console.log(typeof ErrorText)
    }
    return (
        <div className='container d-flex justify-content-center align-items-center mt-5'>
            <div className='login-card w-50 h-50 bg-white mt-5 p-3 rounded shadow-lg'>
                <p className='fs-1 text-black-50 text-center'>Login</p>
                <Formik
                    initialValues={initailValues}
                    validationSchema={loginSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-user fs-4 m-3'></i>
                            <Field type="text" name="username" placeholder='username' className='form-control' />
                        </div>
                        <div className='mx-5'>
                            <ErrorMessage name="username" component={typeof ErrorText ? ErrorText : undefined} />
                        </div>
                        <div className='mt-2 d-flex justify-content-start align-items-center'>
                            <i className='fas fa-lock fs-4 m-3'></i>
                            <Field type="password" name="password" placeholder='password' className='form-control' />
                        </div>
                        <div className='mx-5'>
                            <ErrorMessage name="password" component={ErrorText}/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className='btn btn-info text-white mt-2 px-4'>LOGIN</button>
                        </div>
                        <Link to="/signup" className="text-info text-decoration-none d-block text-center fs-4 p-3">don't have acount</Link>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login