import { gql } from 'apollo-server-express'

export const queryType = gql`
  type Query {
    hello: String
  }
`
