import { Injectable} from '@angular/core'
import { Actions, Effect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { LoadActionType, LoadAction, LoadFail, LoadSuccess, LoadClass,
         LoadIdeaList, LoadIdeaListFail, LoadIdeaListSuccess } from './../action/load.action';
import { DashboardService} from './../../service/dashboard.service';
import { StartupService } from 'src/app/service/startup.service';



@Injectable()
export class LoadEffect {
    constructor(
        private actions$: Actions, private _router: Router, private _startup: StartupService
    ) {}

        @Effect()
        SubmitIdea$  = this.actions$.pipe(
          ofType<LoadClass>(LoadActionType.LOAD_STATE),
           switchMap((action)=> {
               return this._startup.submitIdea(action.payload).pipe(
                  map((res) => { return new LoadSuccess(res); })
               )
           })  
          ,
            catchError(err => of(new LoadFail(err)))
        )

        
        @Effect()
        ListIdea$  = this.actions$.pipe(
          ofType<LoadIdeaList>(LoadActionType.LOAD_IDEA_LIST),
           switchMap((action)=> {
               return this._startup.getIdeaList().pipe(
                  map((res) => { return new LoadIdeaListSuccess(res); })
               )
           })  
          ,
            catchError(err => of(new LoadIdeaListFail(err)))
        )

    
     
                              
}