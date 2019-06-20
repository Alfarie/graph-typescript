import {User} from './schema/User'

const Query = `
  extend type Query {
    user(userId: ID): User
  }
`

const Mutation = `
  extend type Mutation {
    user_register(name: String): User
  }
`

export default [
  Query,
  Mutation,
  User
]