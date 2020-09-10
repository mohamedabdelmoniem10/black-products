import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersboardComponent } from './usersboard/usersboard.component';
import { SigningComponent } from './usersboard/signing/signing.component';
import { HomeComponent } from './usersboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: UsersboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'signin',
        component: SigningComponent,
      },
      {
        path: 'signup',
        component: SigningComponent,
      },
      
    ]
  },{
  path: 'dashboard',
  component: DashboardComponent,
  children: []
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
