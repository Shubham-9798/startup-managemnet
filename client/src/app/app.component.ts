import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store} from '@ngrx/store'
import { AppState} from './store/models/app-state.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {

  }

  

}
