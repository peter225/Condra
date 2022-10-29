import { AuthStateInterface } from "src/app/Auth/Types/authState.interface";
import { createReducer, on, Action } from '@ngrx/store';

import { registerAction, registerFailureAction, registerSuccessAction } from './actions/actions';
import { LoginAction, LoginFailureAction, LoginSuccessAction } from './actions/login-action';
import { GetUserAction, GetUserFailureAction, GetUserSuccessAction } from "./actions/getUser.action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
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
    ),
    on(
        GetUserAction,
        (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: false,
            isLoading: true
        })

    ),
    on(
        GetUserSuccessAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: action.currentUser
        })

    ),
    on(
        GetUserFailureAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isLoading: false,
            isLoggedIn: false,
            currentUser: null
        })

    ),
    
)
export function reducers(state: AuthStateInterface, action: Action){
    return authReducer(state, action)
}