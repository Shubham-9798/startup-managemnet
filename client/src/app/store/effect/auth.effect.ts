import { Injectable} from '@angular/core'
import { Actions, Effect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';

import { AuthActionType, Login, LoginFailed, LoadUserStateAction, LoadLogout, Logout, LogoutFailure, CheckSession, CheckSessionSuccess} from './../action/auth.action';
import { AuthService } from './../../service/auth.service';
import { AuthCredential, AuthModel, resData } from '../models/auth.model';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffect {
    constructor(
        private actions$: Actions, private authService$: AuthService, private _router: Router
    ) {}

        @Effect()
        CheckSession$  = this.actions$.pipe(
          ofType<CheckSession>(AuthActionType.CHECK_SESSION_AUTH_STATE),
                map(() => {
                  let user:resData = JSON.parse(localStorage.getItem('user'))
                  console.log(user);
                  if(user) {
                    return new CheckSessionSuccess(user.accessToken, user.data)
                  }
                }) ,
                tap(()=>  this._router.navigate(['dashboard'])),
                catchError(err => of(new LogoutFailure(err)))
        )
    
        @Effect()
        AuthCredential$  = this.actions$.pipe(
          ofType<LoadUserStateAction>(AuthActionType.LOAD_AUTH_STATE),
            switchMap((action) =>{
              return this.authService$.login(action.payload).pipe(
                map( (user:resData) => { 
                  localStorage.setItem("user", JSON.stringify(user))
                  return new Login(user.accessToken, user.data)
                }),
                tap(()=>  this._router.navigate(['dashboard'])),
                catchError(err => of(new LoginFailed(err)))
              )
            })
        );

        @Effect()
        Logout$  = this.actions$.pipe(
          ofType<LoadLogout>(AuthActionType.LOGOUT_AUTH_STATE),
            map(() => { 
                  localStorage.removeItem("user")
                }),
                switchMap(res => [
                  new Logout()
                ]),
                tap(()=>  this._router.navigate(['home'])),
                catchError(err => of(new LogoutFailure(err)))
        )
                              
}