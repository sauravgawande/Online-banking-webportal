import { Component,OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit{

  localStorageValues: any;

  users: any = []
  users1:any =[]
  p:any
  constructor(private complainService: ComplaintService) {}

  ngOnInit(): void {
    this.getAllComplaints()
  }

  serviceName:any
getAllComplaints(){
  this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
  // console.warn(this.localStorageValues.user._id);
  this.complainService.getAuserComplaints(this.localStorageValues.user._id).subscribe((data:string[])=>{
    //   console.warn(data);
    //  this.users.push(data.complain)
 this.users = data
  // console.warn(this.users);
  this.users.map((i:any)=>{
    i.serviceData.map((i:any)=>{
      let serviceName = i.name
    })
  })
//   let a =Object.entries(this.users.serviceData)
// // this.users.serviceData.map((i:any)=>{
//    console.warn(a);
  
// })
  })

 


  
}


}
