import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { AuthResponseInterface } from "src/app/Auth/Types/authResponse.interface";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/actions";


@Injectable()
export class RegisterEffect {
    register$ = createEffect(()=>this.actions$.pipe(
        ofType(registerAction),
        switchMap(({request})=>{
            return this.authService.register(request).pipe(map((currentUser: CurrentUserInterface)=>{
                return registerSuccessAction({currentUser})
                
            }))
        }),
        catchError((errrorResponse: HttpErrorResponse)=>{
            return of(registerFailureAction({errors:errrorResponse.error.errors}))
        })
    ))

    constructor(private actions$: Actions, private authService: AuthService){}
}