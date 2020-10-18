import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthModel } from 'src/app/store/models/auth.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  state$: Observable<AuthModel>
  state: AuthModel
 

  constructor(private st: Store<AppState>) { }

  ngOnInit(): void {
    this.state$ = this.st.select(store => store.auth)

    this.state$.subscribe((data) => {
      console.log(data)
      this.state = data
    })
  }

}
