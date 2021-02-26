import axios from 'axios'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} from 'graphql'

// Joke Type
const JokeType = new GraphQLObjectType({
  name: 'Joke',
  fields: () => ({
    categories: { type: new GraphQLList(GraphQLString) },
    created_at: { type: GraphQLString },
    icon_url: { type: GraphQLString },
    id: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    url: { type: GraphQLString },
    value: { type: GraphQLString },
  })
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    categories: {
      type: new GraphQLList(GraphQLString),
      resolve(parent, args) {
        return axios
          .get('https://api.chucknorris.io/jokes/categories')
          .then(res => res.data)
      }
    },
    joke: {
      type: JokeType,
      args: {
        categoryId: { type: GraphQLString }
      },
      resolve(parent, { categoryId }) {
        return axios
          .get(`https://api.chucknorris.io/jokes/random?category=${args.categoryId}`)
          .then(res => res.data)
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})