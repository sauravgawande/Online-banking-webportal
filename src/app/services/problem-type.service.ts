import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProblemTypeService {

  constructor(private http:HttpClient) { }

  getService():Observable<any>{
    return this.http.get('http://localhost:4000/api/problemType/get')
  }

  createService(data:any):Observable<any>{
    console.warn(data);
    
    return this.http.post('http://localhost:4000/api/problemType/create',data)
  }

  updateIsActive(isActive:any , id:any):Observable<any>{
    // console.warn(password);
    
    return this.http.put(`http://localhost:4000/api/problemType/update/isActive/${id}`, isActive);
  }
}
