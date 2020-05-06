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
import { FooterComponent } from './footer/footer.component'

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AmplifyAngularModule,
    ChartsModule,
    WavesModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
