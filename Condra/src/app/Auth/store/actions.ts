import { createAction, props } from "@ngrx/store";
import { ActionTypes } from './actionTypes';
import { RegisterRequestInterface } from 'src/app/shared/types/register-request.interface';
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE)