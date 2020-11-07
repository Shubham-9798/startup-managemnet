import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { AdminModule } from './admin/admin.module'

import { StoreModule } from '@ngrx/store'
// import { AuthReducer } from './store/reducer/auth.reducer'
// import { MasterReducer } from './store/reducer/master.reducer'
// import { LoadReducer} from './store/reducer/load.reducer';
import { reducer} from './store/reducer/reducer';

import { AuthEffect } from './store/effect/auth.effect';
import { MasterEffect} from './store/effect/master.effect';
import { LoadEffect } from './store/effect/load.effect';

import { AuthService } from './service/auth.service';
import { DashboardService } from './service/dashboard.service';
import { PublicService } from './service/public.service';
import { MasterService } from './service/master.service';
import { StartupService } from './service/startup.service';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'

import { HomeComponent } from './components/public/home/home.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { ProfileComponent } from './components/view/profile/profile.component';
import { NavbarComponent } from './components/view/navbar/navbar.component';
import { BaseAppComponent } from './components/public/base-app/base-app.component';
import { LoginComponent } from './components/view/login/login.component';
import { RegisterComponent } from './components/view/register/register.component';
import { PageNotFoundComponent } from './components/view/page-not-found/page-not-found.component';
import { ButtonComponent } from './components/view/button/button.component';
import { SidebarComponent } from './components/view/sidebar/sidebar.component';
import { AddIdeaComponent } from './components/main/add-idea/add-idea.component';
import { ListIdeaComponent } from './components/main/list-idea/list-idea.component';
import { IdeaDetailsComponent } from './components/main/idea-details/idea-details.component';


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
    ButtonComponent,
    SidebarComponent,
    AddIdeaComponent,
    ListIdeaComponent,
    IdeaDetailsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffect, MasterEffect, LoadEffect]),
    StoreModule.forRoot(reducer),
    AdminModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [AuthService, DashboardService, PublicService, MasterService, StartupService ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
