import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap,tap } from "rxjs";
import { ArticleService } from "src/app/shared/services/article.service";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { getArticleAction, getArticleSuccessAction, getArticleFailureAction } from "../actions/getArticle.action";


@Injectable()
export class GetArticleEffect {
    
    getArticle$ = createEffect(()=>this.actions$.pipe(
        ofType(getArticleAction),
        switchMap(({slug})=>{
            return this.articleService.getArticle(slug).pipe(map((article: ArticleInterface)=>{
                //this.persistenceService.set('accessToken',currentUser.token)
                return getArticleSuccessAction({article})
                
            }))
        }),
        catchError(()=>{
            return of(getArticleFailureAction())
        })
    ))
    
    constructor(private actions$: Actions, 
                private articleService: ArticleService
                ){}
}