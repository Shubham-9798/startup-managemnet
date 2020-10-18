import { Injectable} from '@angular/core'
import { Actions, Effect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import {AuthAction, AuthActionType, UpdateUserStateAction, UpdateUserStateFailureAction, LoadUserStateAction, LoadUserStateSuccessAction} from './../action/auth.action';
import { AuthService } from './../../service/auth.service';
import { AuthModel, resData } from '../models/auth.model';


@Injectable()
export class AuthEffect {
    constructor(
        private actions$: Actions, private authService$: AuthService
    ) {}

        @Effect()
        AuthCredential$  = this.actions$
        .pipe(
          ofType<LoadUserStateAction>(AuthActionType.LOAD_AUTH_STATE),
          switchMap((action) => {
            console.log(action)
            return this.authService$.login(action.payload).pipe(
              map ((res:resData) =>  new UpdateUserStateAction(res.accessToken, res.data)),
              catchError((err: Error) => of(new UpdateUserStateFailureAction(err))),
           ); 
          }),  
        );
    
                              
}