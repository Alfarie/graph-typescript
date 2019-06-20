import _ from 'lodash'
import mongoose from 'mongoose'
import {ApolloServer} from 'apollo-server'

import userSchema from './domain/user/typeDefs'
import userResolvers from './domain/user/resolvers'
import articleSchema from './domain/article/typeDefs'
import articleResolver from './domain/article/resolvers'
import rootSchema from './domain/rootSchema'
import getContext from './domain/getContext'

mongoose
  .connect('mongodb://localhost/graphqlTypeScript', {useNewUrlParser: true, useCreateIndex: true,})
  .then(success => console.log('Connect Mongo Success'))
  .catch(err => console.log('Connect Mongo Error'))

const server = new ApolloServer({
  context: () => getContext(),
  typeDefs: _.flatten([rootSchema, userSchema, articleSchema]),
  resolvers: [userResolvers, articleResolver],
  playground: true,
})

server.listen(3001).then(({url}) => {
  console.log(`Server ready at ${url}`)
})