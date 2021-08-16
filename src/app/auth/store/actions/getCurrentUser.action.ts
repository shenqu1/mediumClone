import {createAction, props} from '@ngrx/store'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {ActionTypes} from '../actionTypes'

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER)

export const getCurrentUserSucessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)
