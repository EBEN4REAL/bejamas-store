import React from 'react'
import {gql, useMutation} from "@apollo/client"
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'

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
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async(values: any, {setSubmitting}: any) => {
                    setSubmitting(true)
                    const response = await signup ({
                        variables: values
                    })
                    console.log(response)
                    localStorage.setItem('token', response.data.login.token)
                    setSubmitting(false)
                    history.push('/users')
                }}>

                <Form>
                    <Field name="email" type="text" placeholder="Email"></Field>
                    <ErrorMessage name="email" component={'div'}></ErrorMessage>
                    <Field name="password" type="password" placeholder="Password"></Field>
                    <ErrorMessage name="password" component={'div'}></ErrorMessage>
                    <button type="submit">Login</button>
                </Form>

            </Formik>
        </div>
    )
}



export default Login