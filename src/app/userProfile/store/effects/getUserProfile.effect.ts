import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {switchMap, map, catchError} from 'rxjs/operators'
import {UserProfileService} from '../../services/userProfile.service'
import {UserProfileInterface} from '../../types/userProfile.interface'
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from '../actions/getUserProfile.action'

@Injectable()
export class GetUserProfileEffect {
  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({slug}) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: UserProfileInterface) => {
            return getUserProfileSuccessAction({userProfile})
          }),

          catchError(() => {
            return of(getUserProfileFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService
  ) {}
}
