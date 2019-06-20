import  _ from 'lodash'
import { IContext } from '../contextType'
import { IResolvers } from 'graphql-tools'

const userResolvers: IResolvers= {
  Query: {
    async user(obj: any, {userId}: {userId: string}, {bditUser}: IContext) {
      return await bditUser.findOne(userId)
    },
  },
  Mutation: {
    async user_register(obj: any, {name}: {name:string}, {bditUser}: IContext) {
      const user = await bditUser.findByName(name)
      return  _.isNil(user) ? await bditUser.create(name) : null
    },
  },
}

export default userResolvers