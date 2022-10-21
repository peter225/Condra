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


@Injectable()
export class RegisterEffect {
    
    register$ = createEffect(()=>this.actions$.pipe(
        ofType(registerAction),
        switchMap(({request})=>{
            return this.authService.register(request).pipe(map((currentUser: CurrentUserInterface)=>{
                this.persistenceService.set('accessToken',currentUser.token)
                return registerSuccessAction({currentUser})
                
            }))
        }),
        catchError((errrorResponse: HttpErrorResponse)=>{
            return of(registerFailureAction({errors:errrorResponse.error.err}))
        })
    ))

    redirectAfterSubmission$ = createEffect(()=>this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(()=>{
            //console.log('1')
            this.router.navigateByUrl('/');
        })
    ),{dispatch:false}

    )
        
    constructor(private actions$: Actions, 
                private authService: AuthService,
                private persistenceService: PersistenceService,
                private router:Router
                ){}
}