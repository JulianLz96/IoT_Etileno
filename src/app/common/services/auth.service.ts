import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggeIn() {
    return !!localStorage.getItem('token');
  }

}
