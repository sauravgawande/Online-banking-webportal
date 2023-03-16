import { Component, Inject, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComplaintLogService } from 'src/app/services/complaint-log.service';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  localStorageValues: any = [];

  constructor(
    private complaintService: ComplaintService,
    @Inject(MAT_DIALOG_DATA) public userId: any,
    private complaintLog: ComplaintLogService
  ) {}

  ngOnInit(): void {
    this.getComplaints(this.userId);

    this.createComplaintLog();
  }
  myArray: any[] = [];
  dataFromTicketNumber: any = [];
  getComplaints(id: any) {
    // console.warn(this.userId);
    let a = 0;
    this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
    let userid = this.localStorageValues.user._id;
    this.complaintService.getAuserComplaints(userid).subscribe((data) => {
      // console.warn(data);
      data.map((i: any) => {
        // console.warn(i.ticketNumber);
        if (a < i.ticketNumber) {
          a = i.ticketNumber;
        }
      });
      // console.warn(a);
      data.map((item: any) => {
        if (a == item.ticketNumber) {
          // console.warn(item);
          this.dataFromTicketNumber.push(item);
        }
      });
    });
    // console.warn(this.dataFromTicketNumber);
  }
  data: any = {};
  createComplaintLog() {
    //  console.warn(this.dataFromTicketNumber);

    // this.dataFromTicketNumber.map((item:any)=>{
    //    console.warn(item._id);
    //    this.data={
    //     complaintId:item._id,
    //     description:item.description,
    //     assignedEng:"",
    //     status:item.status,

    //   }
    //      console.warn(this.data);

    // })
    //  for(let i =0 ;i< this.dataFromTicketNumber.length;i++){

    //  }

    // console.warn(typeof this.dataFromTicketNumber);

    // Declare an empty array

    // Declare an object
    // myObject = {
    //   name: "John",
    //   age: 30
    // };

    // Add the object to the array using push()
    this.myArray.push(this.dataFromTicketNumber);
    // console.warn(this.myArray);
    this.myArray.map((i:any)=>{
       console.warn(i[0]);
      
      
    })

    // this.complaintLog.createComplaintLog(this.data).subscribe((data)=>{
    //   console.warn(data);

    // })
  }
}
