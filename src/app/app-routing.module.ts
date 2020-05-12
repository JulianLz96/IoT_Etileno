import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveTimeComponent } from './live-time/live-time.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './common/guards/auth-guard.guard';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { SignUpComponent } from 'aws-amplify-angular';
import { LogInManualComponent } from './log-in-manual/log-in-manual.component';
import { SignUpManualComponent } from './sign-up-manual/sign-up-manual.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   //{ path: 'logIn', component: LogInComponent },
   { path: 'logIn', component: LogInManualComponent },
   //{ path: 'signUp', component: LogInComponent},
   { path: 'signUp', component: SignUpManualComponent},
   { path: 'dispositivos', component: DispositivosComponent, canActivate:[AuthGuardGuard]},
   { path: 'liveTime/:dispositivoId', component:  LiveTimeComponent, canActivate: [AuthGuardGuard]},
   { path: 'history', component: HistoryComponent, canActivate:[AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
