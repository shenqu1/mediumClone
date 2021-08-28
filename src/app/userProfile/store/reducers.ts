import {Action, createReducer, on} from '@ngrx/store'
import {UserProfileStateInterface} from '../types/userProfileState.interface'
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from './actions/getUserProfile.action'

const initalState: UserProfileStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

const userProfileReducer = createReducer(
  initalState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action)
}
