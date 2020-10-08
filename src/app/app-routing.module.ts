import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestAccessComponent } from './request-access/request-access.component';
import { SignUpLinkedinComponent } from './sign-up-linkedin/sign-up-linkedin.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignUpLinkedinComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'request-successfull', component: RequestAccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
