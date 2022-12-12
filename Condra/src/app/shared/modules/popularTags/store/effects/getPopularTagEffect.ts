import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap,tap } from "rxjs";
import { PopularTagsService } from "../../services/popular-tags.service";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "../actions/getPopularTagAction";


@Injectable()
export class GetPopularTagsEffect {
    
    getPopularTags$ = createEffect(()=>this.actions$.pipe(
        ofType(getPopularTagsAction),
        switchMap(()=>{
            return this.popularTagsService.getPopularTags().pipe(map((popularTags: string[])=>{
                //this.persistenceService.set('accessToken',currentUser.token)
                return getPopularTagsSuccessAction({popularTags})
                
            }))
        }),
        catchError(()=>{
            return of(getPopularTagsFailureAction())
        })
    ))

    constructor(private actions$: Actions, 
                private popularTagsService: PopularTagsService
                ){}
}