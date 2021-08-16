import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {switchMap, map, catchError, tap} from 'rxjs/operators'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {AuthService} from '../../services/auth.service'
import {
  loginAction,
  loginFailureAction,
  loginSucessAction,
} from '../actions/login.action'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return loginSucessAction({currentUser})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({errors: errorResponse.error.errors}))
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSucessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
