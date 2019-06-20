import User from './user/model/User'
import Article from './article/model/Article'
import glob from 'glob'

const autoPemissions =  glob.sync("**/*/model/*.ts").map(path => {console.log((path))})

export default function getConext() {
    const bditUser = new User()
    const bditArticle= new Article()
    return {
        bditUser,
        bditArticle
    }
}