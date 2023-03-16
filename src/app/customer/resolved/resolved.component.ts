import { Component } from '@angular/core';
import { ComplaintserviceService } from '../complaintservice.service';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.css']
})
export class ResolvedComponent {

  // users: any = []
  // constructor(private status: ComplaintserviceService) {

  //   this.status.status().subscribe((data) => {
  //     console.warn("data", data);
  //     // this.users = data;
  //     data.map((items:any)=>{
  //       if (items.status==="resolved"){
  //         this.users.push(items)
  //       }
  //     })
  //   })

  // }

  user: any = []
  users: any = []
  constructor(private status: ComplaintserviceService) {

    this.status.alldata().subscribe((data) => {
      this.users = data;
      // console.log(this.users)
      this.users.map((items:any)=>{
              if (items.status==="resolved"){
                this.user.push(items)
              }
             })
    })

  }

  // getResolvedComplaints(){

  // }


  

}
