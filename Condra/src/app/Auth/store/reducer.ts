import { AuthStateInterface } from "src/app/shared/types/authState.interface";
import { createReducer, on, Action } from '@ngrx/store';

import { registerAction } from './actions';

const initialSate: AuthStateInterface = {
    isSubmitting: false
}
const authReducer = createReducer(
    initialSate,
    on(
        registerAction,
        (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true
        })
    )
    
)
export function reducers(state: AuthStateInterface, action: Action){
    return authReducer(state, action)
}