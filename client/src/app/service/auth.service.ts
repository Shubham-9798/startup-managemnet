import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map} from 'rxjs/operators';


import { AuthCredential} from './../store/models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AuthUrl:String = "http://www.localhost:4202/"
  header = new HttpHeaders()
    .set("Content-Type", "application/json");

  constructor(private http: HttpClient) { }

  login(data: AuthCredential) {
    return this.http.post(this.AuthUrl + 'login', data, {headers: this.header})
  }
}
