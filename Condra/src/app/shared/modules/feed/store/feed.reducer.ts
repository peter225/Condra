import { createReducer, on, Action } from '@ngrx/store';

import { FeedStateInterface } from "../types/feedState.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./actions/getFeed.action";

const initialState: FeedStateInterface = {
    isLoading: false,
    error: null,
    data: null
}
const getFeedReducer = createReducer(
    initialState,
    on(
        getFeedAction,
        (state: FeedStateInterface) => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getFeedSuccessAction,
        (state, action): FeedStateInterface => ({
            ...state,
            isLoading: true,
            data: action.feed
        })
    ),
    on(
        getFeedFailureAction,
        (state): FeedStateInterface => ({
            ...state,
            isLoading: false
            
        })
    ),
    
    
)
export function reducers(state: FeedStateInterface, action: Action){
    return getFeedReducer(state, action)
}