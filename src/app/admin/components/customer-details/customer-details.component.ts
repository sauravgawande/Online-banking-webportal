// import { DialogConfig } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComplaintService } from 'src/app/services/complaint.service';




@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer_info:Array<any> = []

  constructor(
    private complainService: ComplaintService,
    @Inject(MAT_DIALOG_DATA) public customerDetails: any
  ) { }

  ngOnInit(): void {
    // console.warn(this.customerDetails);
    

    this.complainService.getSingleComplainDetails(this.customerDetails)
      .subscribe((result) => {
// console.warn(result);

         this.customer_info.push(result.user)
       
      })

      
  }


}
