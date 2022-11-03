import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap} from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { PersistenceService } from "src/app/shared/services/persistence.service";

import { AuthService } from "../../services/auth.service";
import { GetUserAction, GetUserFailureAction, GetUserSuccessAction } from "../actions/getUser.action";


@Injectable()
export class getUserEffect {
    
    getUser$ = createEffect(()=>this.actions$.pipe(
        ofType(GetUserAction),
        switchMap(()=>{
            const token = this.persistenceService.get('accessToken')
            if(!token){
                return of(GetUserFailureAction())
            }
            return this.authService.getCurrentUser().pipe(map((currentUser: CurrentUserInterface)=>{
                
                return GetUserSuccessAction({currentUser})
                
            }))
        }),
        catchError(()=>{
            return of(GetUserFailureAction())
        })
    ))

            
    constructor(private actions$: Actions, 
                private authService: AuthService,
                private persistenceService: PersistenceService
                ){}
}