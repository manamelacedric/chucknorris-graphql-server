import { IResolvers } from 'apollo-server-express'
import axios from 'axios'
import { CHUCKNORRIS_API_URL } from '../config'

const resolvers: IResolvers = {
  Query: {
    joke: async (_, { category }) => {
      return axios.get(`${CHUCKNORRIS_API_URL}/random?category=${category}`)
        .then((response) => response.data)
    },
    categories: async () => {
      return axios.get(`${CHUCKNORRIS_API_URL}/categories`)
        .then((response) => response.data)
    },
  },
}

export default resolvers
