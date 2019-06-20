change babel 6 -> babel 7

add package @types/lodash and @types/mongoose

add package @babel/preset-typescript

set tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "target": "es5",
    "module": "commonjs",
    "allowJs": true,
    "outDir": "./dist",
    "noEmit": true,
    "strict": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
    }
}
```

add  extensions to compile .ts
```bash
nodemon --exec babel-node --extensions \".ts,.js\" src/index.js
```

create /domain/*/interface/*.ts
create interface that same type to data mongodb
``` typescript
export interface IArticle{
    content: string
    creator: mongoose.Types.ObjectId
}
```
export new interface extents from mongoose
```typescript
export interface IArticleModel extends IArticle, mongoose.Document { }
```

/domain/*/model/*.ts
assign type parameter in any module and moongoose model 
```typescript
this.Model = mongoose.model<IArticleModel>('Article', articleSchema)
```

/domain/contextType.ts
```typescript
import UserModel from "./user/model/User";
import ArticleModel from "./article/model/Article";

export interface IContext {
    bditUser: UserModel
    bditArticle: ArticleModel
}
```

/domain/*/resolvers.ts
assign type to parameter context as IContext