import express from 'express'
import { graphqlHTTP } from'express-graphql'
import cors from 'cors'
import schema from './schema'

const app = express()

// register middlewares
app.use(cors())

/** GraphQL */
// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(4000, () => console.log('Running a GraphQL API server at http://localhost:4000/graphql'))