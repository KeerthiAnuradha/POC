import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from './app.routing';
import { AlertsModule } from 'angular-alert-module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Configuration } from './app.constant';
import { AuthService } from './services/auth.service';
import { XhrInterceptor } from './XhrInterceptor';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    AlertsModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    LoginService,
    Configuration,
    AuthService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
