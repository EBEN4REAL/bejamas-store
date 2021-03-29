import React from 'react'
import {gql, useMutation} from "@apollo/client"
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {useHistory, Link} from 'react-router-dom'
import '../styles/login.css'
import Logo from '../../assets/img/twitter-logo.png'

const  LOGIN_MUTATION = gql `
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
        }
    }

`

interface LoginValues {
    email: string
    password: string
}

const Login = () => {
    const history = useHistory()
    const [signup, {data}] = useMutation(LOGIN_MUTATION)

    const initialValues: LoginValues  = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required("Email Required"),
        password: Yup.string().max(20, "Must be 20 characters or less").required("Password Required")
    })

   
    return (
        <div>
            <img src={Logo} width="70" className="logo" />
            <h3>Login</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async(values: any, {setSubmitting}: any) => {
                    setSubmitting(true)
                    const response = await signup ({
                        variables: values
                    })
                    localStorage.setItem('token', response.data.login.token)
                    setSubmitting(false)
                    history.push('/users')
                }}>

                <Form>
                    <Field name="email" type="text" placeholder="Email"></Field>
                    <ErrorMessage name="email" component={'div'}></ErrorMessage>
                    <Field name="password" type="password" placeholder="Password"></Field>
                    <ErrorMessage name="password" component={'div'}></ErrorMessage>
                    <button type="submit" className="login-button">Login</button>
                </Form>

            </Formik>
            <div className="register">
                <h4>Don't have an account?</h4>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    )
}



export default Login