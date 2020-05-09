import { Component, OnInit, AfterViewInit, AfterContentInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Amplify, { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, AfterViewInit, AfterContentInit {

  token: string;
  URL: string = 'https://iot-equipo6.auth.us-east-1.amazoncognito.com/login?client_id=48v9fpc23ldq4jbblkpmddbpmm&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:4200/logIn';
  URL_sign: string = 'https://iot-equipo6.auth.us-east-1.amazoncognito.com/signup?client_id=48v9fpc23ldq4jbblkpmddbpmm&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:4200/logIn';
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    public amplifyService: AmplifyService,
    private zone: NgZone) { 
      this.activatedRoute.queryParams.subscribe(params => {
        this.token = params['code'];
        console.log(this.token);
        if (this.token != null) {
          localStorage.setItem('token', this.token);
          this.getData3();
        }
      });
     }

  ngOnInit(): void {
    
  }

  async getData() {
    const email = await Auth.currentUserInfo().then(data => {
      console.log(data);
      return data.attributes.email;
    }).
      catch(err => console.log(err));
    localStorage.setItem('email', email);
    this.router.navigate(['/home']);
  }

  async getData2() {
    const attributes = (await Auth.currentSession()).getIdToken().payload
    console.log(attributes);
    
  }

  async getData3() {
    const data = await Auth.currentAuthenticatedUser();
    console.log(data);
    
  }

  ngAfterViewInit() {
    // if (!this.token) {
    //   if(this.router.url == '/logIn')
    //     window.location.assign(this.URL);
    //   else {
    //     window.location.assign(this.URL_sign);
    //   }
    // } else {
    // }
  }

  ngAfterContentInit() {
    
  }

}
