import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintLogService {

  constructor(private http:HttpClient) { }

  createComplaintLog(data:any){
    return this.http.post(`http://localhost:4000/api/complaintLogs/create`,data)
  }


}
