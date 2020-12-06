import { Component, OnInit } from '@angular/core';
import { StartupService } from 'src/app/service/startup.service';
import { AppState} from './../../../store/models/app-state.model'
import { Store } from '@ngrx/store';
import { LoadIdeaList } from 'src/app/store/action/load.action';
import { Observable } from 'rxjs';
import { Idea } from 'src/app/store/models/load.model';

@Component({
  selector: 'app-list-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.css']
})
export class ListIdeaComponent implements OnInit {
   ideaList: Observable<Idea[]>
  private isLoaded: Observable<Boolean>
  private isLoading: Observable<Boolean>
  private edit:String = 'Edit'
  private Submitted:String = 'Submitted'


  constructor(private service: StartupService,
    private st: Store<AppState>, ) { 
      this.st.dispatch(new LoadIdeaList(null))
    }
    

  ngOnInit(): void {
   
    this.isLoaded = this.st.select(store => store.loadList.isLoaded)
    this.ideaList = this.st.select(store => store.loadList.ideas)
    this.isLoading = this.st.select(store => store.loadList.isLoading)
  }

  ngOnDestroy() {
    // this.ideaList.unsubscribe();
    console.log('unsubscribe');
    
  }
  
}
