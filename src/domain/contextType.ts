import UserModel from "./user/model/User"
import ArticleModel from "./article/model/Article"
import glob from 'glob'

const autoPemissions =  glob.sync("**/model/*.ts").map(path => require(path).default)

export interface IContext{
    bditUser: UserModel
    bditArticle: ArticleModel
}

// type BackendObject<
//   E extends Record<keyof E, keyof any>,
//   I extends Record<keyof E, any>
//   > = {
//     fields: {
//       [P in E[keyof E]]: I[{
//         [Q in keyof E]: E[Q] extends P ? Q : never
//       }[keyof E]]
//     }
//   }

// interface FooBackendObject extends
//   BackendObject<typeof FooNames, FooTypes> { }