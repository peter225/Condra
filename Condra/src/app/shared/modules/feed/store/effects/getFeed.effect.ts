import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap,tap } from "rxjs";
import { FeedService } from "../../services/feed.service";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/getFeed.action";


@Injectable()
export class GetFeedEffect {
    
    feed$ = createEffect(()=>this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({url})=>{
            return this.feedService.getFeed(url).pipe(map((feed: GetFeedResponseInterface)=>{
                //this.persistenceService.set('accessToken',currentUser.token)
                return getFeedSuccessAction({feed})
                
            }))
        }),
        catchError((errrorResponse: HttpErrorResponse)=>{
            return of(getFeedFailureAction())
        })
    ))

    redirectAfterLogin$ = createEffect(()=>this.actions$.pipe(
        ofType(LoginSuccessAction),
        tap(()=>{
            //console.log('1')
            this.router.navigateByUrl('/');
        })
    ),{dispatch:false}

    )
        
    constructor(private actions$: Actions, 
                private feedService: FeedService,
                private router:Router
                ){}
}