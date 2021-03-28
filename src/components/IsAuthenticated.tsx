import React, { Children } from 'react'
import {gql, useQuery} from "@apollo/client"
import { Redirect } from 'react-router'

const IS_LOGGED_IN_QUERY  = gql `
  query IS_LOGGED_IN_QUERY {
        me {
            id
        }
    }
`

interface Props {
    children?: React.ReactNode
}


export default function IsAuthenticated({children}: Props) {
    console.log(children)
    const {loading, error, data} = useQuery(IS_LOGGED_IN_QUERY)
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error.message}</p>
    if(!data.me) {
        return <Redirect to={{pathname: '/landing'}} />
    }
    return (
        <>
            children
        </>
    )
}
