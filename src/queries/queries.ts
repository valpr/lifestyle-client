import { gql } from '@apollo/client'

export const LOGIN = gql`
   mutation TRY_LOGIN($username: String!, $password: String!){
       Login (
           username: $username,
           password: $password
       ){
           value
       }
   }

`
export const ALL_USER_TEST = gql`
   query ALL_USERS {
       allUsers{
           firstname
       }
   }
`

// to tests
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
//test GET_SELF using playground first
export const GET_SELF = gql`
    query getSelf {
        myUser{
            firstname
            lastname
            gender
            height
            weights{
                date
                weight
            }
            entries{
                description
                date
                calories
            }
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


