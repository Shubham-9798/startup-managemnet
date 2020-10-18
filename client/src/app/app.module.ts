import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';


import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AdminModule } from './admin/admin.module'

import { StoreModule } from '@ngrx/store'
import { AuthReducer } from './store/reducer/auth.reducer'


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'
import { AuthEffect } from './store/effect/auth.effect';
import { HomeComponent } from './components/public/home/home.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { ProfileComponent } from './components/view/profile/profile.component';
import { NavbarComponent } from './components/view/navbar/navbar.component';
import { BaseAppComponent } from './components/public/base-app/base-app.component';
import { LoginComponent } from './components/view/login/login.component';
import { RegisterComponent } from './components/view/register/register.component';
import { PageNotFoundComponent } from './components/view/page-not-found/page-not-found.component';
import { SidenavbarComponent } from './components/main/sidenavbar/sidenavbar.component';
import { ButtonComponent } from './components/view/button/button.component';
import { SidebarComponent } from './components/view/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    NavbarComponent,
    BaseAppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    SidenavbarComponent,
    ButtonComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffect]),
    StoreModule.forRoot({auth: AuthReducer}),
    AdminModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
