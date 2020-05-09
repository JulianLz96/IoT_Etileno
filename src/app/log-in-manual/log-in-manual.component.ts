import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-log-in-manual',
  templateUrl: './log-in-manual.component.html',
  styleUrls: ['./log-in-manual.component.css']
})
export class LogInManualComponent implements OnInit {

  email:string = "";
  passwd:string = "";
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  async logIn() {
    try {
        const user = await Auth.signIn(this.email, this.passwd);
        console.log(user.attributes.email);
        localStorage.setItem("email", user.attributes.email);
        localStorage.setItem("token", 'yes');
        this.router.navigate(['/home']);
        
    } catch (error) {
        console.log('error signing in', error);
    }
}

}

