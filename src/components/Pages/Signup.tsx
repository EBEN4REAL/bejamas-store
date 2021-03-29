import React from 'react'
import {gql, useMutation} from "@apollo/client"
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {useHistory, Link} from 'react-router-dom'
import Logo from '../../assets/img/twitter-logo.png'
import '../styles/login.css'



const  SIGNUP_MUTATION = gql `
    mutation signup($name: String, $email: String!, $password: String!){
        signup(name: $name, email: $email, password: $password) {
            token
        }
    }

`

interface SignupValues {
    email: string
    password: string
    confirmPassword: string
    name: string
}

const Signup = () => {
    const history = useHistory()
    const [signup, {data}] = useMutation(SIGNUP_MUTATION)

    const initialValues: SignupValues  = {
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required("Email Required"),
        password: Yup.string().max(20, "Must be 20 characters or less").required("Password Required"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref('password')], "Passwords must match"
        ),
        name: Yup.string().max(15, "Must be 15 characters or less").required("Name Required")
    })

   
    return (
        <div className="login-sign-up-container">
            <img src={Logo} width="50" className="" />
            <h3>Sign up</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async(values: any, {setSubmitting}: any) => {
                    setSubmitting(true)
                    const response = await signup ({
                        variables: values
                    })
                    localStorage.setItem('token', response.data.signup.token)
                    setSubmitting(false)
                    history.push('/users')
                }}>

                <Form>
                    <Field name="email" type="text" placeholder="Email"></Field>
                    <ErrorMessage name="email" component={'div'}></ErrorMessage>
                    <Field name="name" type="text" placeholder="Name"></Field>
                    <ErrorMessage name="name" component={'div'}></ErrorMessage>
                    <Field name="password" type="password" placeholder="Password"></Field>
                    <ErrorMessage name="password" component={'div'}></ErrorMessage>
                    <Field name="confirmPassword" type="password" placeholder="Confirm Password"></Field>
                    <ErrorMessage name="confirmPassword" component={'div'}></ErrorMessage>
                    <button type="submit">Signup</button>
                </Form>

            </Formik>
            <div className="register">
                <h4>Already have an account?</h4>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}



export default Signup