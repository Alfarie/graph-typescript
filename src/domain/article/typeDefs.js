import {Article} from './schema/Article'

const Query = `
  extend type Query {
    article(articleId: ID!): Article
    articles(creator: ID): [Article]
  }
`

const Mutation = `
  extend type Mutation {
    article_save(articleId: ID, userId: ID, content: String): Article
  }
`

export default [
  Query,
  Mutation,
  Article
]