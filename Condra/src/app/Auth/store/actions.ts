import { createAction, props } from "@ngrx/store";
import { ActionTypes } from './actionTypes';
import { RegisterRequestInterface } from 'src/app/shared/types/register-request.interface';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegisterRequestInterface}>()
)