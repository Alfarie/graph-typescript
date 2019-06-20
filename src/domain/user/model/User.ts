import mongoose, {Schema} from 'mongoose'
import { IUserModel } from '../interface/User';

export const userSchema = new Schema({
  name: {type: String, unique: true},
})

export default class UserModel{

  Model: any

  constructor() {
    this.Model = mongoose.model<IUserModel>('User', userSchema)
  }

  findOne(id: string) {
    return this.Model.findOne({_id: id})
  }

  findByName(name: string) {
    return this.Model.findOne({name})
  }

  create(name: string) {
    return new this.Model({name}).save()
  }
}