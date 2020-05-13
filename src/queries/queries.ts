import { gql } from '@apollo/client'


export const ADD_USER = gql`
    mutation createUser($firstname: String!, $lastname: String!, $weight: Int!, $gender: Int!, $height: Int!, $effort: Int!, $ objective: Int!){
        addUser(
            firstname: $firstname,
            lastname: $lastname,
            weight: $weight,
            gender: $gender,
            height: $height,
            effort: $effort,
            objective: $objective
        ){
            firstname
            lastname
        }
    }
`

export const GET_USER = gql`
    query {
        myUser{
            firstname
            lastname
            weight
            entries
            gender
            height
            weights
            effort
            objective
        }
    }
`


export const ENTRY_ADDED = gql`
subscription entries{
    entryAdded{
        description
        calories
        time
        date
    }
}
`

export const MY_ENTRIES = gql`

`

