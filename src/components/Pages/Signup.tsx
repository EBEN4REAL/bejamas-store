import React from 'react'
import {gql, useMutation} from "@apollo/client"
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'

const  SIGNUP_MUTATION = gql `
    mutation signup($name: String, $email: String!, $password: String!){
        signup(name: $name, email: $email!, password: $password) {
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
        email: Yup.string().email('Invalid email').required("Email Required")
    })
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async(values: any, {setSubmitting}: any) => {
                    setSubmitting(true)
                    const response = await signup ({
                        variables: values
                    })
                    localStorage.setItem('token', response.data.signup.token
                    )
                    setSubmitting(false)
                    history.push('/users')
                }}>

                <Form>
                    <Field name="email" type="text" placeholder="Email"></Field>
                    <ErrorMessage name="email" component={'div'}></ErrorMessage>
                    <Field name="name" type="text" placeholder="Name"></Field>
                    <ErrorMessage name="email" component={'div'}></ErrorMessage>
                    <Field name="pasword" type="password" placeholder="Password"></Field>
                    <ErrorMessage name="email" component={'div'}></ErrorMessage>
                    <Field name="confirmPassword" type="password" placeholder="Confirm Password"></Field>
                    <ErrorMessage name="confirmPassword" component={'div'}></ErrorMessage>
                    <button type="submit">Signup</button>
                </Form>

            </Formik>
        </div>
    )
}



export default Signup