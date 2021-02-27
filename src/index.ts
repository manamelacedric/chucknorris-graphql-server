import { ApolloServer } from 'apollo-server'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/schema'
import { PORT } from './config'

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 GraphQL server ready at ${url}`)
})