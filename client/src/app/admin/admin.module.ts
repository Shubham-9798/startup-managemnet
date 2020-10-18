import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import  { AdminRoutingModule } from './admin-routing.module';
import { AppComponent } from './app/app.component'



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
