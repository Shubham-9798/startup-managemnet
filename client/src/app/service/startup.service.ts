import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http'
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { HandleError } from './error.handler';
import { AppUrl, AuthUrl} from './../utility/server.routes';
import { Header } from '../utility/header.setter';



@Injectable({
  providedIn: 'root'
})
export class StartupService {
  private appUrl:String = AppUrl()
  header:HttpHeaders = Header()

  constructor(private _http: HttpClient) { }

  submitIdea(idea:any): Observable<any> {
    return this._http.post(this.appUrl + 'addIdeaToUserArray', idea, {headers: this.header})
  }

  getIdeaList(): Observable<any>{
    return this._http.get(this.appUrl+'get-ideaof-user', {headers: this.header})
     .pipe(
      catchError(HandleError)
      );
  }
}
