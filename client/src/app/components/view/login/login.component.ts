import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs'
import { select, Store} from '@ngrx/store'
import { AppState} from './../../../store/models/app-state.model'

import { Login, LoginFailed,  LoadUserStateAction} from './../../../store/action/auth.action';
import { Router } from '@angular/router';
import { AuthModel, AuthCredential } from 'src/app/store/models/auth.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  state: Observable<AuthModel>
  loading$: Observable<Boolean>
  error$: Observable<Error>

  constructor( private st: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    this.state = this.st.select(store => store.auth)
    this.loading$ = this.st.select(store => store.auth.isloading)
    let user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      console.log("Login");
    }

    console.log("login-component")
  }

  login(f :AuthCredential) {
    console.log(f);
    this.st.dispatch(new LoadUserStateAction(f))
  }

  ngOnDestroy(){
    // this.loading$.unsubscribe();
    console.log(`ng-destory`);
  }

}
