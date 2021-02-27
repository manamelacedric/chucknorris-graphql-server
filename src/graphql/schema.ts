import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Joke {
    categories: [String]
    created_at: String
    icon_url: String
    id: String
    updated_at: String
    url: String
    value: String
  }

  type Query {
    "Get all categories"
    categories: [String]

    "Get a random joke with a specified category"
    joke(category: String): Joke
  }
`

export default typeDefs
