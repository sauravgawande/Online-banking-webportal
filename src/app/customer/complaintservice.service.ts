import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintserviceService {

  constructor(private http:HttpClient) { }

  complaints(data:object){
// console.warn(data);

     return this.http.post('http://localhost:4000/api/complain/create',data)
        
      }



      status():Observable<any>
  {
    return this.http.get('http://localhost:4000/api/complain/get')
  }

  userdata(){
    return this.http.get('http://localhost:4000/api/user/get')
  }

  service(){
     return this.http.get('http://localhost:4000/api/serviceType/get')
    
  }

  problem(){
    return this.http.get('http://localhost:4000/api/problemType/get')
  }


  alldata():Observable<any>{
    return this.http.get('http://localhost:4000/api/complain/alldata/all')
  }


}
