import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState} from './../../../store/models/app-state.model'

import { CategoryState, DomainState, MasterType } from 'src/app/store/models/master.model';
import {MasterService} from './../../../service/master.service';
import { Observable } from 'rxjs';
import { LoadState } from 'src/app/store/models/load.model';
import { LoadClass } from 'src/app/store/action/load.action';


@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {
  categoryState: Observable<MasterType>
  load: Observable<LoadState>
  categoryType: MasterType
  domainType: MasterType
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, 
              private st: Store<AppState>, 
              private master$: MasterService) { }


  ngOnInit() {
    this.master$.getCategoryList().subscribe(res => {
        this.categoryType = res.data
        console.log(this.categoryType)
     }, (error) => console.log(error)
    )  

    this.master$.getDomainList().subscribe(res => {
      this.domainType = res.data
      }, (error) => console.log(error)
    )  
      
    this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          smallDesc: ['', Validators.required],
          description: ['', Validators.required],
          file: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue],
          categoryId: ['', Validators.required],
          domainId: ['', Validators.required]
      });
      this.load = this.st.select(store => store.Loads)
      // this.load.subscribe(data => console.log(data))
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // console.log(this.registerForm.value);
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        console.log("inline-block");
        return
      }
      console.log(this.registerForm.value);
      
      this.st.dispatch( new  LoadClass(this.registerForm.value) )
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
