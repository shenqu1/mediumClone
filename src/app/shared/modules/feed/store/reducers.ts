import {routerNavigationAction} from '@ngrx/router-store'
import {Action, createReducer, on} from '@ngrx/store'
import {FeedStateInterface} from '../types/feedState.interface'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSucessAction,
} from './actions/getFeed.action'

const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSucessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): FeedStateInterface => initialState)
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
