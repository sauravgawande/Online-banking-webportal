import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  localData: any = [];

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(data1: any) {
    return this.http
      .post('http://localhost:4000/api/user/login', data1, {
        observe: 'response',
      })
      .subscribe((data) => {
        console.warn(data);
        
        let data1 = JSON.stringify(data.body);
        const obj = JSON.parse(data1).user.userType;
          console.log(JSON.parse(data1).user.userType)
        localStorage.setItem('user', JSON.stringify(data.body));

        if (obj === 'Engineer' || obj === 'engineer') {
          this.router.navigate(['/engineer']);
        } else if (obj === 'Manager' || obj === 'manager') {
          this.router.navigate(['/manager']);
        } else if (obj === 'Customer' || obj === 'customer') {
          this.router.navigate(['/customer/table']);
        } else {
          this.router.navigate(['/admin/Dashboard']);
        }
      });
  }

  getuser(): Observable<any> {
    return this.http.get('http://localhost:4000/api/user/get');
  }

  getSingleUser(id: any): Observable<any> {
    // console.log(id);

    return this.http.get(`http://localhost:4000/api/user/get/single/${id}`);
  }

  deleteUser(id: any) {
    return this.http.delete(`http://localhost:4000/api/user/delete/${id}`);
  }

  createUser(data: any): Observable<any> {
    // console.warn(data);
    return this.http.post('http://localhost:4000/api/user/create', data);
  }

  updateUser(data: any, id: any): Observable<any> {
    return  this.http.put(`http://localhost:4000/api/user/update/${id}`, data);
  }

 
}
