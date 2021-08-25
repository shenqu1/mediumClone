import {routerNavigationAction} from '@ngrx/router-store'
import {Action, createReducer, on} from '@ngrx/store'
import {ArticleStateInterface} from '../types/articleState.interface'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSucessAction,
} from './actions/getArticle.action'

const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSucessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
)

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}
