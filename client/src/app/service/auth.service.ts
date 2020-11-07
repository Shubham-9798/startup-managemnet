import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http'

import { catchError } from 'rxjs/operators'
import { HandleError } from './error.handler';

import { AuthCredential, resData} from './../store/models/auth.model';
import { AuthUrl} from './../utility/server.routes';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AuthUrl:String = AuthUrl()
  header = new HttpHeaders()
    .set("Content-Type", "application/json");

  constructor(private _http: HttpClient) { }

  login(data: AuthCredential) {
    return this._http.post<resData>(this.AuthUrl + 'login', data, {headers: this.header})
    .pipe(
      catchError(HandleError)
      );
  }
}
