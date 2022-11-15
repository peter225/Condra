import { createAction, props } from "@ngrx/store";
import { ActionTypes } from '../actionTypes';
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";

export const GetUserAction = createAction(
    ActionTypes.GET_USER
)

export const GetUserSuccessAction = createAction(
    ActionTypes.GET_USER_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const GetUserFailureAction = createAction(
    ActionTypes.GET_USER_FAILURE
)