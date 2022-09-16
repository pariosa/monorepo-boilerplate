import { ApolloClient, gql, HttpLink } from '@apollo/client'
import { cache } from './apollo/cache'

function createIsomorphLink() {
  if (typeof window === 'undefined') {
    const frontEndGraphQLUrl = 'http://localhost:8080/api/graphql'
    return new HttpLink({
      uri: frontEndGraphQLUrl,
      headers: { ssr: true },
      credentials: 'same-origin',
    })
  } else {
    return new HttpLink({
      uri: '/api/graphql',
      headers: { ssr: false },
      credentials: 'same-origin',
    })
  }
}

const typeDefs = gql`
  extend type Query {
    draftComplaints: [Complaint]
  }
`
const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: createIsomorphLink(),
  cache,
  typeDefs,
})
export default client
