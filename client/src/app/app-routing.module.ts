import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { BaseAppComponent } from './components/public/base-app/base-app.component';
import { LoginComponent } from './components/view/login/login.component';
import { RegisterComponent } from './components/view/register/register.component';
import { PageNotFoundComponent } from './components/view/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: BaseAppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
