import { Component, OnInit, NgZone, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: string;
  searchText:String;
  URL_LOGIN: string = environment.url_login;
  URL_SIGN: string = environment.url_singin;
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
