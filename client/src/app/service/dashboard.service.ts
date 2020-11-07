import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Header } from '../utility/header.setter';
import { AppUrl } from '../utility/server.routes';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private appUrl:String = AppUrl()
  header:HttpHeaders = Header()
  
  constructor(private _http: HttpClient) { }


}
