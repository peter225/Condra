import { CurrentUserInterface } from "./current-user.interface";

export interface ArticleInterface{
    title: string,
    slug: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    tagList: string[],
    description: string,
    author:CurrentUserInterface,
    favorited:boolean,
    favoritesCount:number


}