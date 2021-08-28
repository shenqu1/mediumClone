import {Action, createReducer, on} from '@ngrx/store'
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSucessAction,
} from 'src/app/auth/store/actions/updateCurrentUser.action'
import {SettingsStateInterface} from '../types/settingsState.interface'

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

const settingsReducers = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSucessAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
)

export function reducers(state: SettingsStateInterface, action: Action) {
  return settingsReducers(state, action)
}
