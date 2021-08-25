import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {EditArticleStateInterface} from '../types/editArticleState.interface'

export const updateArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditArticleStateInterface
>('editArticle')

export const isSubmittingSelector = createSelector(
  updateArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  updateArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) =>
    editArticleState.validationErrors
)

export const articleSelector = createSelector(
  updateArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.article
)

export const isLoadingSelector = createSelector(
  updateArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
)
