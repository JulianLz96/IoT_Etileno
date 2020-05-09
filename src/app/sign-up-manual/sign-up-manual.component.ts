import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-manual',
  templateUrl: './sign-up-manual.component.html',
  styleUrls: ['./sign-up-manual.component.css']
})
export class SignUpManualComponent implements OnInit {

  email:String = "";
  passwd:String = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signUp() {

  }

}
