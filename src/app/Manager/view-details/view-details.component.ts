import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComplaintService } from 'src/app/services/complaint.service';
import { ManagerService } from 'src/app/services/manager.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
 customer_details:Array<any> = []

    constructor(
    private service: ManagerService,private complainService:ComplaintService,
    @Inject(MAT_DIALOG_DATA) public customerDetails: any
  ) { } 
  
   
   
    ngOnInit(): void {

      this.complainService.getSingleComplainDetails(this.customerDetails).subscribe((result)=>{
        console.warn(result);
        
        this.customer_details.push(result.user)
        console.log("Result..",result);
        
      })
      
  
    }    
   
  
  }
  














  // import { DialogConfig } from '@angular/cdk/dialog';
// import { Component, OnInit, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ComplaintService } from 'src/app/services/complaint.service';


// @Component({
//   selector: 'app-customer-details',
//   templateUrl: './customer-details.component.html',
//   styleUrls: ['./customer-details.component.css']
// })
// export class CustomerDetailsComponent implements OnInit {
//   customer_info:Array<any> = []
//   constructor(
//     private complainService: ComplaintService,
//     @Inject(MAT_DIALOG_DATA) public customerDetails: any
//   ) { }
//   ngOnInit(): void {
//     this.complainService.getSingleComplainDetails(this.customerDetails)
//       .subscribe((result) => {
//         this.customer_info.push(result.user)
       
//       })
      
//   }

// }