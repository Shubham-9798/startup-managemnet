import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs'
import { select, Store} from '@ngrx/store'
import { AppState} from './../../../store/models/app-state.model'

import { ToogleUserStateAction, UpdateUserStateAction, LoadUserStateAction } from './../../../store/action/auth.action';
import { Router } from '@angular/router';
import { AuthModel, AuthCredential } from 'src/app/store/models/auth.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private subscription: Subscription[] = []
  state: Observable<AuthModel>
  loading$: Observable<Boolean>
  error$: Observable<Error>

  constructor( private st: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    this.state = this.st.select(store => store.auth)
    this.loading$ = this.st.select(store => store.auth.isloading)
    this.error$ = this.st.select(store => store.auth.error)    
    console.log("login-component")

    this.state.subscribe(data => {
      if(data.isLogin)
      { 
        localStorage.setItem('accessToken', data.accessToken)
        this.router.navigate(['dashboard'])
      }

    })

  }

  login(f :AuthCredential) {
    // this.st.dispatch(new LoadUserStateAction())
    this.loading$.subscribe(d => console.log(d))
    console.log(f);
    this.st.dispatch(new LoadUserStateAction(f))
  }



  ngOnDestroy(){
    // this.loading$.unsubscribe();
    console.log(`ng-destory`);
    
  }


  
  

}
