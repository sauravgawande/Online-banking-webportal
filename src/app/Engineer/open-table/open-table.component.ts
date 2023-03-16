import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';
// import { AssignFieldWorkerComponent } from '../assign-field-worker/assign-field-worker.component';
import { ViewDetailsComponent } from 'src/app/Manager/view-details/view-details.component';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-open-table',
  templateUrl: './open-table.component.html',
  styleUrls: ['./open-table.component.css'],
})
export class OpenTableComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private complaintService: ComplaintService,
    private router: Router
  ) {}
  loginEng: string="Engineer-2";
  getComplaintIn: any;
  getDataFromComplaint: any = [];
  localStorageValues: any;
  ngOnInit(): void {
    this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
    this.localStorageValues = this.localStorageValues.user.username;
    this.complaintService.getComplaint().subscribe((result) => {
      // console.log(result);
      result.map((items: any) => {
        if (
          items.assignUserId === this.localStorageValues &&
          (items.status === 'WIP' || items.status === 'wip')
        ) {
          // console.log("ok");

          this.getDataFromComplaint.push(items);
          //  console.warn(this.getDataFromComplaint);
        }
      });
      // result.map((items: any) => {
      // // console.warn(items.status);

      //   if (items.status === "WIP")
      //   {
      //     // console.log("ok");

      //      this.getDataFromComplaint.push(items)
      //     //  console.warn(this.getDataFromComplaint);

      //   }
      //  })
    });
  }
  //======================================================
  // this.userService.updateUser(data, this.toUpdateUserData._id).subscribe((result) =>
  //{      //  console.warn(result)
  //this.router.navigate(['/admin/Registration'])    })
  selectedStatus: string = '';
  allStatus: any = ['Work In Progress', 'Resolved', 'Escalated'];
  p:any

  selectChangeHandler(event: any, id: any) {
    this.selectedStatus = event.target.value;
    // console.log(this.selectedStatus, id);
    if (this.selectedStatus == 'Resolved') {
      var itemToAdd = { status: 'resolved' };

      this.complaintService
        .updateSingleStatus(id, itemToAdd)
        .subscribe((result) => {
          // this.router.navigate(['/engineer/openComplaint'])
        });
      location.reload();
    }
    if (this.selectedStatus == 'Escalated') {
      var itemToAdd1 = { status: 'escalated' };
      this.complaintService
        .updateSingleStatus(id, itemToAdd1)
        .subscribe((result) => {
          // this.router.navigate(['/engineer/escalatedComplaint'])
        });
      location.reload();
    }
  }
  

  // updateStatus1:any={}

  //   updateStatus(val:any,id:any){
  //     console.log(id,val);

  //     if(this.selectedStatus=='Resolved'){
  //       var itemToAdd ={"status":"resolved"}
  //       this.complaintService.updateSingleStatus(id,itemToAdd)
  //     }
  //     if(this.selectedStatus=='Escalated'){
  //       var itemToAdd1={"status":"escalated"}
  //       this.complaintService.updateSingleStatus(id,itemToAdd1)
  //     }

  //   }

  // updateStatus(id:any,itemToAdd:any){
  //   this.complaintService.updateSingleStatus(id,itemToAdd)
  // }
  //===============================================
  // updateStates(empForm:NgForm):void{
  //   console.log(empForm.value);
  //
  // }

  // public localVar: any;
  // getComplaint() {

  // let storedData = JSON.parse(localStorage.getItem('user') || '{}')
  // storedData = storedData.user.name
  //  console.warn(storedData);

  // this.complaintService.getComplaint().subscribe(result => {
  //   this.getDataFromComplaint=result
  //   console.log(this.getDataFromComplaint);

  // result.map((items: any) => {

  //  console.warn(items.assignedEngineer);
  // if (items.assignedEngineer == storedData) {
  //  this.getDataFromComplaint.push(items)
  // console.warn(this.getDataFromComplaint);
  // }

  // })

  // })

  // }

  openDialog(id: any) {
    this.dialog.open(ViewDetailsComponent, {
      width: '35%',
      data: id,
    });
  }
  name: any;
  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      console.warn(this.getDataFromComplaint);
      this.getDataFromComplaint = this.getDataFromComplaint.filter((res: any) => {
        return res.firstName.toLowerCase().match(this.name.toLowerCase());
      });
    }
  }

  // openDialog(id:any) {
  //   this.dialog.open(ViewDetailsComponent, {
  //     width: '35%'

  //   });
  // }
 
}
