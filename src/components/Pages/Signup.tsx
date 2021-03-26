import React from 'react'
import {gql, useMutation} from "@apollo/client"

const USERS_QUERY  = gql `
    query USERS_QUERY {
        users {
            id
            name
        }
    }
`
interface User {
    name: string
}

export default function Users() {
    
}
