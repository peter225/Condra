import { createAction, props } from "@ngrx/store";
import { ActionTypes } from '../actionTypes';
import { RegisterRequestInterface } from 'src/app/Auth/Types/register-request.interface';
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { AuthResponseInterface } from "src/app/Auth/Types/authResponse.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendError.interface";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{errors:BackendErrorsInterface}>()
)

export const LoginAction = createAction(
    ActionTypes.LOGIN,
    props<{request: RegisterRequestInterface}>()
)

export const LoginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const LoginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{errors:BackendErrorsInterface}>()
)