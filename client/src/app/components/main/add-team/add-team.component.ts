import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState} from './../../../store/models/app-state.model'


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  registerForm: FormGroup;
  submitted:boolean = false
  constructor(private formBuilder: FormBuilder,  private st: Store<AppState>, ) { }



  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', ],
      email: ['', Validators.email],
      role: ['', Validators.required],
      mobile: ['', Validators.required]
  });
  }

   // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm.value);
    // stop here if form is invalid
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("inline-block");
      return
    }
    console.log(this.registerForm.value);
    
    // this.st.dispatch( new  LoadClass(this.registerForm.value) )
}

}
