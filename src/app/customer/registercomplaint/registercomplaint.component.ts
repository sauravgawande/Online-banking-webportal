import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComplaintserviceService } from '../complaintservice.service';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ComplaintService } from 'src/app/services/complaint.service';
import { PopupMessageComponent } from '../popup-message/popup-message.component';
import { ServiceTypeService } from 'src/app/services/service-type.service';
import { Router } from '@angular/router';
import { ComplaintLogService } from 'src/app/services/complaint-log.service';
import { LoadingComponent } from '../loading/loading.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registercomplaint',
  templateUrl: './registercomplaint.component.html',
  styleUrls: ['./registercomplaint.component.css'],
})
export class RegistercomplaintComponent implements OnInit {
  serviceName: any;
  problemList: any;
  ticketNumer: any;
  form = new FormGroup({
    ticketNumber: new FormControl(),
    userId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    pinCode: new FormControl(''),
    phone: new FormControl(''),
    problemTypeId: new FormControl('', [Validators.required]),
    serviceTypeId: new FormControl('', [Validators.required]),
    assignedEngineer: new FormControl(''),
    status: new FormControl('open'),
    description: new FormControl(''),
  });

  // problemList: any[] = ['Cannot make a call.', 'Cannot receive call', 'Neither make nor receive call.'];

  // serviceList: any[] = ['Landline.', 'Broadband', 'Fiber optic.'];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  localStorageValues: any;
  first: any;
  last: any;
  a: number = 0;

  constructor(
    private complaint: ComplaintserviceService,
    private snack: MatSnackBar,
    private _snackBar: MatSnackBar,
    private complainService: ComplaintService,
    private serviceTypeService: ServiceTypeService,
    private router:Router,
    private complaintLogService:ComplaintLogService,
    private dialog:MatDialog
  ) {
    this.getProblemTypeList();
  }

  getProblemTypeList() {
    this.complaint.problem().subscribe((data) => {
      // console.warn('data', data);
      this.problemList = data;
    });
  }

  ngOnInit() {
    this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
    this.fillInputBox();
    this.form.value.ticketNumber = this.a;
    this.getHightestTicketNo();
    // console.warn(typeof this.localStorageValues.user.serviceType);
  }
  getServiceType(id: any) {
    // console.warn(id);

    this.serviceTypeService.getSingleService(id).subscribe((data: any) => {
      // console.warn(data.service.name);
      this.serviceName = data.service.name;
      // console.warn(this.serviceName);
    });
  }

  //autoFill inputbox
  fillInputBox() {
    this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
    let id = this.localStorageValues.user.serviceType;
    this.serviceTypeService.getSingleService(id).subscribe((data: any) => {
      this.serviceName = data.service.name;
    });
    this.form = new FormGroup({
      ticketNumber: new FormControl(),
      userId: new FormControl(this.localStorageValues.user._id),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(this.localStorageValues.user.address1),
      pinCode: new FormControl(this.localStorageValues.user.pinCode),
      phone: new FormControl(this.localStorageValues.user.phone),
      problemTypeId: new FormControl('', [Validators.required]),
      serviceTypeId: new FormControl(this.serviceName),
      assignedEngineer: new FormControl(''),
      status: new FormControl('open'),
      description: new FormControl('',[Validators.required]),
    });
  }

  //get highest ticket no.
  getHightestTicketNo() {
    this.complainService.getComplaint().subscribe((data) => {
      data.map((item: any) => {
        if (item) {
          if (this.a <= item.ticketNumber) {
            this.a = item.ticketNumber;
            // console.warn('a', this.a);
          }
        } else {
          this.a = 1;
          console.warn('1', this.a);
        }
      });
      this.a = Number(this.a) + 1;
    });
  }

  // onChange(event: any){}

  get problemTypeId() {
    return this.form.get('problemTypeId');
  }
  get description(){
    return this.form.get('description')
  }



  submit() {
    // console.warn(this.form.value);
    this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
    this.first = this.localStorageValues.user.firstName;
    this.last = this.localStorageValues.user.lastName;
    this.form.value.firstName = this.first;
    this.form.value.lastName = this.last;
    this.form.value.ticketNumber = this.a;
    this.form.value.serviceTypeId = this.localStorageValues.user.serviceType;
    console.warn(this.form.value);
    this.complaint.complaints(this.form.value).subscribe((data) => {
      // console.warn(data);
      this.router.navigate(['customer/complaints'])
    });

    

    // this.complainService.getSingleComplainDetails(this.localStorageValues.user._id).subscribe((data)=>{
    //   console.warn(data);
      
    // })


// this.openDialog(this.localStorageValues.user._id)

  }

  openDialog(id:any) {
    console.log(id);
    
    this.dialog.open(LoadingComponent,{
      data:id,
       width:'35%' 
    });
  }
  btnClick() {
    this.snack.open('Your Complain has been Registered Successfully ', 'Okay', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.openFromComponent(PopupMessageComponent, {
      data: {
        message: message,
        action: action,
        snackbar: this._snackBar,
      },
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1000,
    });
  }

 
}
