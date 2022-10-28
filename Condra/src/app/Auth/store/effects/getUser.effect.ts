import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap,tap } from "rxjs";
import { AuthResponseInterface } from "src/app/Auth/Types/authResponse.interface";
import { PersistenceService } from "src/app/shared/services/persistence.service";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/actions";
import { GetUserAction, GetUserFailureAction, GetUserSuccessAction } from "../actions/getUser.action";


@Injectable()
export class RegisterEffect {
    
    getUser$ = createEffect(()=>this.actions$.pipe(
        ofType(GetUserAction),
        tap(()=>{
            return this.authService.getCurrentUser().pipe(map((currentUser: CurrentUserInterface)=>{
                
                return GetUserSuccessAction({currentUser})
                
            }))
        }),
        catchError((errrorResponse: HttpErrorResponse)=>{
            return of(GetUserFailureAction({errors:errrorResponse.error.err}))
        })
    ))

            
    constructor(private actions$: Actions, 
                private authService: AuthService,
                private persistenceService: PersistenceService,
                private router:Router
                ){}
}