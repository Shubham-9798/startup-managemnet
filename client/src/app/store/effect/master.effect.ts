import { Injectable} from '@angular/core'
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {  map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';

import { CategoryAction, CategoryActionType, LoadCategory, LoadCategoryFail, LoadCategorySuccess} from './../action/master.action';
import { MasterService } from './../../service/master.service';
import { AuthCredential, AuthModel, resData } from '../models/auth.model';
import { Router } from '@angular/router';


@Injectable()
export class MasterEffect {
    constructor(
        private actions$: Actions, private masterService$: MasterService, private _router: Router
    ) {}

    simpleObservable = new Observable((observer) => {
        // observable execution
        observer.next("bla bla bla")
        observer.complete()
    })

        // @Effect()
        // LoadCategory$  = this.actions$.pipe(
        //   ofType<LoadCategory>(CategoryActionType.LOAD_CATEGORY_STATE),
        //   map(res=>{ 
        //       let ct = JSON.parse(localStorage.getItem('categoryType'))
        //       if(res) return new LoadCategorySuccess(ct);
        //       switchMap( res => {
        //         return this.masterService$.getCategoryList().pipe(
        //             map( (res) => { 
        //              localStorage.setItem("categoryType", JSON.stringify(res))
        //              console.log(res);
        //              return new LoadCategorySuccess(res)
        //            }),
        //            catchError(err => of(new LoadCategoryFail(err)))
        //           );
        //   })
        //     })
                    

        // ) 
        
    
        // @Effect()
        // AuthCredential$  = this.actions$.pipe(
        //   ofType<LoadUserStateAction>(AuthActionType.LOAD_AUTH_STATE),
        //     switchMap((action) =>{
        //       return this.authService$.login(action.payload).pipe(
        //         map( (user:resData) => { 
        //           localStorage.setItem("user", JSON.stringify(user))
        //           return new Login(user.accessToken, user.data)
        //         }),
        //         tap(()=>  this._router.navigate(['dashboard'])),
        //         catchError(err => of(new LoginFailed(err)))
        //       )
        //     })
        // );

        // @Effect()
        // Logout$  = this.actions$.pipe(
        //   ofType<LoadLogout>(AuthActionType.LOGOUT_AUTH_STATE),
        //     map(() => { 
        //           localStorage.removeItem("user")
        //         }),
        //         switchMap(res => [
        //           new Logout()
        //         ]),
        //         tap(()=>  this._router.navigate(['home'])),
        //         catchError(err => of(new LogoutFailure(err)))
        // )
                              
        // .pipe(
        //     map( data => localStorage.setItem('categoryType', JSON.stringify(data))),
        //     tap(() => {return new LoadCategorySuccess(user)})
        // )
}