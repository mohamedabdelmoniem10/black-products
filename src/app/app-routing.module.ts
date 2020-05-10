import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersboardComponent } from './usersboard/usersboard.component';
import { SigningComponent } from './usersboard/signing/signing.component';
import { HomeComponent } from './usersboard/home/home.component';


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
        path: 'signing',
        component: SigningComponent,
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
