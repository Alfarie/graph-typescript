import mongoose from "mongoose"

export interface IArticle{
    content: string
    creator: mongoose.Types.ObjectId
}

export interface IArticleModel extends IArticle, mongoose.Document { }