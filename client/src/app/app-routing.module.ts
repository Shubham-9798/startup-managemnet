import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { BaseAppComponent } from './components/public/base-app/base-app.component';
import { LoginComponent } from './components/view/login/login.component';
import { RegisterComponent } from './components/view/register/register.component';
import { PageNotFoundComponent } from './components/view/page-not-found/page-not-found.component';
import { AddIdeaComponent } from './components/main/add-idea/add-idea.component';
import { ListIdeaComponent } from './components/main/list-idea/list-idea.component';
import { IdeaDetailsComponent } from './components/main/idea-details/idea-details.component';
import { AddTeamComponent } from './components/main/add-team/add-team.component';

const routes: Routes = [
  {path: '', component: BaseAppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'add-idea', component: AddIdeaComponent, pathMatch:'full' },
    { path: 'list-idea', component: ListIdeaComponent, pathMatch:'full'},
    { path: 'list-idea/:id', component: IdeaDetailsComponent, pathMatch:'full' },

    // # Team Routes
    { path: 'add-team', component: AddTeamComponent, pathMatch:'full' }



    // { path: 'overview', component: Overview },
    // { path: 'specs', component: Specs }
  ]},
  {path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
