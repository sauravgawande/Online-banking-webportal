import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}
  isUserLoggedIn() {
    return !!localStorage.getItem('user');
  }
}
