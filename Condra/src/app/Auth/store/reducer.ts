import { AuthStateInterface } from "src/app/Auth/Types/authState.interface";
import { createReducer, on, Action } from '@ngrx/store';

import { registerAction, registerFailureAction, registerSuccessAction } from './actions/actions';
import { LoginAction, LoginFailureAction, LoginSuccessAction } from './actions/login-action';

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
}
const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(
        registerSuccessAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(
        registerFailureAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
    on(
        LoginAction,
        (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })

    ),
    on(
        LoginSuccessAction,
        (state,action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
            validationErrors: null
        })

    ),
    on(
        LoginFailureAction,
        (state, action): AuthStateInterface =>({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    )
    
)
export function reducers(state: AuthStateInterface, action: Action){
    return authReducer(state, action)
}