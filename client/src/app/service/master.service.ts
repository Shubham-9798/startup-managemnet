import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppUrl } from '../utility/server.routes';
import { Header} from '../utility/header.setter';
import { catchError } from 'rxjs/operators';
import { HandleError } from './error.handler';
import { CategoryState, MasterType } from '../store/models/master.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private appUrl:String = AppUrl()
  header:HttpHeaders = Header()

  constructor(private _http: HttpClient) { }

  getDomainList() : Observable<any>{
    return this._http.get(this.appUrl+'\list-domain', {headers: this.header}) .pipe(
      catchError(HandleError)
      );
  }

  getCategoryList(): Observable<any>{
    return this._http.get(this.appUrl+'\list-category', {headers: this.header})
     .pipe(
      catchError(HandleError)
      );
  }
}
