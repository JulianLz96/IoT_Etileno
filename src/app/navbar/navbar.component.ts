import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import Amplify, { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  searchText:String;

  constructor(private router:Router,
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
        this.zone.run(() => this.router.navigate(['/']));
      })
      .catch(err => console.log(err));;
  }

}
