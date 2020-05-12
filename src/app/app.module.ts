import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LiveTimeComponent } from './live-time/live-time.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { LoggeadoDirective } from './common/directriz/loggeado.directive';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import Amplify, { Auth } from 'aws-amplify';
import amplify from './aws-exports';
import { LogInManualComponent } from './log-in-manual/log-in-manual.component';
import { SignUpManualComponent } from './sign-up-manual/sign-up-manual.component';


Amplify.configure(amplify);

const oauth = {
  // Domain name
  domain : 'iot-equipo6.auth.us-east-1.amazoncognito.com', 

  // Authorized scopes
  scope : ['phone', 'email', 'profile', 'openid','aws.cognito.signin.user.admin'], 

  // Callback URL
  redirectSignIn : 'http://localhost:4200/logIn', // or 'exp://127.0.0.1:19000/--/', 'myapp://main/'

  // Sign out URL
  redirectSignOut : 'http://localhost:4200/', // or 'exp://127.0.0.1:19000/--/', 'myapp://main/'

  // 'code' for Authorization code grant, 
  // 'token' for Implicit grant
  // Note that REFRESH token will only be generated when the responseType is code
  responseType: 'code',

  // optional, for Cognito hosted ui specified options
  options: {
      // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
      AdvancedSecurityDataCollectionFlag : false
  }
}

Auth.configure({
  oauth: oauth
});

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogInComponent,
    SignUpComponent,
    LiveTimeComponent,
    HistoryComponent,
    HomeComponent,
    DispositivosComponent,
    LoggeadoDirective,
    FooterComponent,
    LogInManualComponent,
    SignUpManualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AmplifyAngularModule,
    ChartsModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
