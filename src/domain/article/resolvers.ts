import _ from 'lodash'
import { IResolvers } from 'graphql-tools';
import { IContext } from '../contextType';

const articleResolver: IResolvers = {
  Query: {
    async article(_: any, {articleId}: any, {bditArticle}: IContext) {
      return await bditArticle.findOne(articleId)
    },
    async articles(_: any, {creator}: any, {bditArticle}: IContext) {
      return await  bditArticle.findMany(creator)
    },
  },
  Mutation: {
    async article_save(obj: any, {articleId, userId, content}: any, {bditArticle}: IContext) {
      if (_.isNil(articleId)) {
        return await bditArticle.create({userId, content})
      } else {
        return await new bditArticle.update({articleId, content})
      }
    },
  },
}

export default articleResolver