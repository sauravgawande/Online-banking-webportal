import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(private http:HttpClient) { }

  getService():Observable<any>{
    return this.http.get('http://localhost:4000/api/serviceType/get')
  }

  createService(data:any):Observable<any>{
    console.warn(data);
    
    return this.http.post('http://localhost:4000/api/serviceType/create',data)
  }

  updateIsActive(isActive:any , id:any):Observable<any>{
    // console.warn(password);
    
    return this.http.put(`http://localhost:4000/api/serviceType/update/isActive/${id}`, isActive);
  }

  getSingleService(id:any){

    // console.warn(id);
    
    // return id
     return this.http.get(`http://localhost:4000/api/serviceType/get/single/${id}`)
  }
}
