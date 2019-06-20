const Query = `
  type Query {
    version: String
  }
`

const Mutation = `
  type Mutation {
    _: Boolean
  }
`

export default [
  Query,
  Mutation
]