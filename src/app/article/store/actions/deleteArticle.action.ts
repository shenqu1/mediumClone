import {createAction, props} from '@ngrx/store'
import {ActionType} from '../actionTypes'

export const deleteArticleAction = createAction(
  ActionType.DELETE_ARTICLE,
  props<{slug: string}>()
)

export const deleteArticleSucessAction = createAction(
  ActionType.DELETE_ARTICLE_SUCESS
)

export const deleteArticleFailureAction = createAction(
  ActionType.DELETE_ARTICLE_FAILURE
)
