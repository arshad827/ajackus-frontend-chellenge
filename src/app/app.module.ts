import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpLinkedinComponent } from './sign-up-linkedin/sign-up-linkedin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendInterceptorComponent } from './http-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    SignUpLinkedinComponent,
    SignUpComponent,
    RequestAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptorComponent, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
