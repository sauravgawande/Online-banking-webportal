import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }
  getData():Observable<any>{
    return this.http.get('http://localhost:4000/api/complaint/get')
  }

  getSingleComplainDetails(id:any):Observable<any>{
 console.warn(id)
     return this.http.get(`http://localhost:4000/api/complaint/get/single/${id}`)
  }


}
