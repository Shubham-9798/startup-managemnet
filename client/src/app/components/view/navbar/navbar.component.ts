import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthModel, resData, UserModel } from 'src/app/store/models/auth.model';
import { LoadLogout, CheckSessionSuccess, CheckSession } from 'src/app/store/action/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  state$: Observable<AuthModel>
  isLogin$: Observable<Boolean>
  // user$: Observable<UserModel>
  user : resData

  constructor(private st: Store<AppState>, private _router: Router) { }

  ngOnInit(): void {
    this.state$ = this.st.select(store => store.auth)
    this.isLogin$ = this.st.select(store => store.auth.isLogin)
    
    this.isLogin$.subscribe((data)=>{
      if(data) {
        this.user = this.loadLocalStorage()
        console.log(this.user);
      }else {
        console.log("logout");
      }
    })
  }

  loadLocalStorage():resData {
    return JSON.parse(localStorage.getItem('user'))
  }


  login() {
    console.log("check-session", this.user);
    if(this.loadLocalStorage() != null) {
      console.log('do-login');      
      this.st.dispatch(new CheckSession())
    } else {
      this._router.navigate(['login'])
    }
  }

  logout() {
    console.log("logout");
    this.st.dispatch(new LoadLogout())
  }

}
