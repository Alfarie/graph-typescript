import mongoose, {Schema} from 'mongoose'
import { IArticleModel } from '../interface/Article'

export const articleSchema = new Schema({
  content: {
    type: String
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
})

export default class ArticleModel {
  Model: any
  constructor() {
    this.Model = mongoose.model<IArticleModel>('Article', articleSchema)
  }

  create({userId, content}: {userId: string, content: string}) {
    return new this.Model({creator: userId, content}).save()
  }

  update({articleId, content}: {articleId: string, content: string}) {
    return this.Model.findOneAndUpdate({id: articleId}, {$set: {content: content}})
  }

  findOne(id :string) {
    return this.Model.findOne({_id: id})
  }

  findMany(creator: string) {
    return this.Model.find({creator: creator})
  }
}