import { gql } from 'apollo-server-express'

export type Person = {
  id: number
  email: string
  phoneNumber: string
  first_name: string
  last_name: string
  avatar: string
}

export const queryType = gql`
  type Person {
    id: Int
    email: String
    phoneNumber: String
    first_name: String
    last_name: String
    avatar: String
  }
`
