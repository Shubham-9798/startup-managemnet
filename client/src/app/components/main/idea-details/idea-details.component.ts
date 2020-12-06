import { Component, OnInit } from '@angular/core';
import { AppState} from './../../../store/models/app-state.model'
import { Store } from '@ngrx/store';
import { Idea } from 'src/app/store/models/load.model';
import { LoadIdeaDetails, LoadIdeaDetailsSuccess, LoadIdeaList } from 'src/app/store/action/load.action';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.component.html',
  styleUrls: ['./idea-details.component.css']
})
export class IdeaDetailsComponent implements OnInit {
  ideaList: Observable<Idea[]>
  private isLoaded: Observable<Boolean>
  private isLoading: Observable<Boolean>
  id:any
  title:String = 'Startup Idea Details'


  constructor(private st: Store<AppState>, public activatedRoute: ActivatedRoute) { 
    // this.st.dispatch(new LoadIdeaList(null))
  }

  ngOnInit(): void {
    this.isLoaded = this.st.select(store => store.loadList.isLoaded)
    this.ideaList = this.st.select(store => store.loadList.ideas)
    this.isLoading = this.st.select(store => store.loadList.isLoading)

    this.activatedRoute.paramMap.subscribe(x => {
      this.id = x.get('id');
      console.log(this.id);  
      this.st.dispatch(new LoadIdeaDetailsSuccess(this.id))
    });

    this.ideaList.subscribe(data =>{ console.log(data)});
    

  } 





}
