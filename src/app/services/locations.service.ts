import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient, private router: Router) {}

  createLocations(data: any): Observable<any> {
     console.warn(data);
    return this.http.post('http://localhost:4000/api/location/create', data);
  }

  getlocation(): Observable<any> {
    return this.http.get('http://localhost:4000/api/location/get');
  }

  deleteLocation(id: any) {
    return this.http.delete(`http://localhost:4000/api/location/delete/${id}`);
  }

  updateLocation(data:any, id: any): Observable<any> {
    console.warn(data,id);
// console.warn(id);

    return this.http.put(`http://localhost:4000/api/location/update/${id}`, data);
  }

  getSingleLocation(id: any): Observable<any> {
    // console.log(id);

    return this.http.get(`http://localhost:4000/api/location/get/single/${id}`);
  }
}
