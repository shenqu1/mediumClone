import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {switchMap, map, catchError, tap} from 'rxjs/operators'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {AuthService} from '../../services/auth.service'
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSucessAction,
} from '../actions/updateCurrentUser.action'

@Injectable()
export class UpdateCurrentUserEffect {
  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({currentUserInput}) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: CurrentUserInterface) => {
            return updateCurrentUserSucessAction({currentUser})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateCurrentUserFailureAction({
                errors: errorResponse.error.errors,
              })
            )
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
