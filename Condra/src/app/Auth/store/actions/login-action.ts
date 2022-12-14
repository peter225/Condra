import { createAction, props } from "@ngrx/store";
import { ActionTypes } from '../actionTypes';
import { RegisterRequestInterface } from 'src/app/Auth/Types/register-request.interface';
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { AuthResponseInterface } from "src/app/Auth/Types/authResponse.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendError.interface";
import { LoginRequestInterface } from "../../Types/login-request.interface";

export const LoginAction = createAction(
    ActionTypes.LOGIN,
    props<{request: LoginRequestInterface}>()
)

export const LoginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const LoginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{errors:BackendErrorsInterface}>()
)