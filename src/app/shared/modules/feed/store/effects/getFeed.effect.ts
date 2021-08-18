import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {switchMap, map, catchError} from 'rxjs/operators'
import {FeedService} from '../../services/feed.service'
import {GetFeedResponseInterface} from '../../types/getFeedResponse.interface'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSucessAction,
} from '../actions/getFeed.action'

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedSerevice.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSucessAction({feed})
          }),

          catchError(() => {
            return of(getFeedFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private feedSerevice: FeedService) {}
}
