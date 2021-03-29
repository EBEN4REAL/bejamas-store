import {gql, useMutation, useQuery} from "@apollo/client"
import React, {useState} from 'react'

import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {useHistory, Link} from 'react-router-dom'
 
const CREATE_PROFILE_MUTATION =  gql`
    mutation createProfile(
        $bio: String
        $location: String
        $website: String
        $avatar: String
    ) {
        createProfile (
            bio: $bio
            location: $location
            website: $website
            avatar: $avatar
        ) {
            id
        }
    }
`


interface ProfileValues {
    bio: string
    location: string
    website: string
    avatar: string
}

export default function CreateProfile() {
    const [createProfile] = useMutation(CREATE_PROFILE_MUTATION)
    
    const  [modalIsOpen, setIsOpen] = useState(false)



    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }
    const initialValues: ProfileValues =  {
        bio: '',
        location: '',
        website: '',
        avatar: ''
    }

  
    return (
        <div>
             <Formik
                initialValues={initialValues}
                onSubmit={async(values: any, {setSubmitting}: any) => {
                    setSubmitting(true)
                   await createProfile ({
                        variables: values
                    })
                    setSubmitting(false)
                }}>

                <Form>
                    <Field name="email" type="text" placeholder="Email"></Field>
                    <ErrorMessage name="email" component={'div'}></ErrorMessage>
                    <Field name="password" type="password" placeholder="Password"></Field>
                    <ErrorMessage name="password" component={'div'}></ErrorMessage>
                    <button type="submit" className="login-button">Create Profile</button>
                </Form>
            </Formik>
            
        </div>
    )
}
