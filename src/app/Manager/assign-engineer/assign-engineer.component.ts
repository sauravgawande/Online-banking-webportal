import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';
import { ManagerService } from 'src/app/services/manager.service';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-assign-engineer',
  templateUrl: './assign-engineer.component.html',
  styleUrls: ['./assign-engineer.component.css']
})
export class AssignEngineerComponent implements OnInit {
  items: any
  firstName: any
  _id: any
  selectedName: any
  userType: any[] = []
  user: any[] = []
  mResult: any
  data: any
  matched:any
  answer:any
  assignedEngineerToManager: any[] = []
  localStorageValues:any
  form = new FormGroup({
    assignUserId: new FormControl(''),
    status: new FormControl('wip')
  });

  constructor(@Inject(MAT_DIALOG_DATA) public customerPincode: any,
    private userService: UserService,private snackBar: MatSnackBar,
    private http: HttpClient,
    // private managerService: ManagerService,
    private complainService: ComplaintService,
    private router: Router) { }

  ngOnInit(): void {

    this.getEngineer()
    // console.warn(this.customerPincode.firstName,
    //   this.customerPincode.pinCode,
    //    this.customerPincode._id);
    this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
    this.localStorageValues = this.localStorageValues.user._id;
    console.warn(this.localStorageValues);


  }
  getEngineer() {
    this.userService.getuser().subscribe((data: any) =>

    //----------------------------------------get manager object--------------------------------------------
    {
      this.userType = data.user

      this.userType.map((e: any) => {
        if ((e.userType === 'manager' || e.userType==='Manager')&& e._id=== this.localStorageValues) {
          this.mResult = e
          console.log(this.mResult);
        }
      })

      //--------------match the engineer pincode with the manager assignedEngineerToManager[ ] ----------------------

      this.userType.map((items: any) => {

        
        if ((items.userType === 'Engineer'|| items.userType==='engineer') &&  this.mResult.assignedEngineerToManager.includes(items.pinCode)) {
          this.matched=items
          // this.user.push(this.matched)
          console.log(this.matched);
          
          ///---------------------  match the engineer with the customer pincode------------------------------------------------------

          if((items.userType==='Engineer'|| items.userType==='engineer') || this.matched.pinCode==this.customerPincode.pinCode){
            console.log(items);
            this.user.push(items)           
            
           
          }
        }
      })

      // this.userType.map((items: any) => {
      //   if ((items.userType === 'engineer' || items.userType === 'Engineer') &&
      //    items.pinCode==this.customerPincode.pinCode) {
      //     this.user.push(items)
      //   }

      // })

    })
  }
  assignSnackBar(){
    this.snackBar.open('Engineer Assigned SuccessFully !!!', '', {
      duration: 2000, 
      panelClass: 'success-snackbar',
      horizontalPosition: "end",
      verticalPosition: 'top',
    });
  }
  submit() {
    // window.location.reload()
    // alert("Engineer Assigned SuccessFully !!!")

    
    this.data = this.form.value;
    console.log(this.data);

    this.userService.updateEngineer(this.customerPincode._id, this.data)
      .subscribe((res) => {

        // console.log("result", res);
        location.reload()

      })

  }



}






























// fetchEngineerByCustomerPincode() {
//   this.userService.getUser().subscribe((data: any) => {
//     data.map((items: any) => {
//       if (items.userType === 'engineer' && items.pincode == this.customerPincode.pincode) {
//         this.userType.push(items)
//       }

//     })
//      console.warn(this.userType);
//   })

// }