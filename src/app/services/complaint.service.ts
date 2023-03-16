import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import  {Observable} from 'rxjs'
// import { complain } from 'dataType';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http : HttpClient) { }

  getComplaint():Observable<any>{
    return this.http.get('http://localhost:4000/api/complain/get')
  }

  getAuserComplaints(userId:any):Observable<any>{
    return this.http.get(`http://localhost:4000/api/complain/get/search/${userId}`)
  }

  getSingleComplainDetails(id:any):Observable<any>{
    // console.log(id)
     return this.http.get(`http://localhost:4000/api/complain/get/single/details/${id}`)
  }

  updateUser(data:any,id:any):Observable<any>{
    // console.warn(data.id);
    
    return this.http.put(`http://localhost:4000/api/complain/update/${id}`,data)
  }
  updateSingleStatus(id:any,itemToAdd:any={}):Observable<any>{
    return this.http.put(`http://localhost:4000/api/complain/update/${id}`,itemToAdd)
  }



}
