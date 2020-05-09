import { Component, OnInit, NgZone, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import Amplify, { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: string;
  searchText:String;
  URL_LOGIN: string = 'https://iot-equipo6.auth.us-east-1.amazoncognito.com/login?client_id=48v9fpc23ldq4jbblkpmddbpmm&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:4200/logIn';
  URL_SIGN: string = 'https://iot-equipo6.auth.us-east-1.amazoncognito.com/signup?client_id=48v9fpc23ldq4jbblkpmddbpmm&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:4200/logIn';
  mySubscription: any;
  
  constructor(private eR:ElementRef,
              private router:Router,
              public amplifyService: AmplifyService,
              private zone:NgZone) { }

  ngOnInit(): void {
  }

  search(){
    this.router.navigate(['/liveTime', this.searchText]);
  }

  logOut() {
    Auth.signOut()
      .then(data => { 
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        // this.zone.run(() => this.router.navigate(['']));
        window.location.reload();
      })
      .catch(err => console.log(err));;
  }

  logIn() {
    // console.log(this.eR.nativeElement.value);
    window.location.assign(this.URL_LOGIN);
  }

  signUp() {
    window.location.assign(this.URL_SIGN);
  }

}
