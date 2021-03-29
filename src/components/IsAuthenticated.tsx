import React from 'react'
import {gql, useQuery} from "@apollo/client"
import { Redirect } from 'react-router-dom'

const IS_LOGGED_IN_QUERY  = gql `
      query me {
        me {
            id
        }
    }
`

interface Props {
    children?: React.ReactNode
}

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
console.log(token)


function IsAuthenticated({children}: Props) {
    console.log(children)
    // const {loading, error, data} = useQuery(IS_LOGGED_IN_QUERY)
    // if(loading) return <p>Loading...</p>
    // if(error) return <p>{error.message}</p>
    // if(!data.me) {
    //     return <Redirect to={{ pathname: "/landing" }} />
    // }
    if(!token) return <p>Not Authorised</p>
    return (
        <div>
            {children}
        </div>
    )
}


export default  IsAuthenticated