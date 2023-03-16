import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RegistrationComponent } from '../registration/registration.component';
import { PopupMessageComponent } from '../popup-message/popup-message.component';
import { Validators } from '@angular/forms';
import { LocationsService } from 'src/app/services/locations.service';
import { ServiceTypeService } from 'src/app/services/service-type.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent implements OnInit {
  userTypes = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Manager' },
    { id: 3, name: 'Engineer' },
    { id: 4, name: 'Customer' },
  ];

  pincodeList: any = [];
  pincodeList1: any = [];

  serviceList: any = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  userData!: FormGroup;

  msg: string = '';

  isCheck = false;

  selectedData: any = [];

  isManagerRoleSelected: boolean = false;

  isCustomerRoleSelected: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private locationService: LocationsService,
    private formBuider: FormBuilder,
    private serviceService: ServiceTypeService
  ) {
    this.userData = new FormGroup({
      userType: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      pinCode: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      username: new FormControl('', [Validators.required]),
      assignedEngineerToManager: new FormControl(''),
      serviceType: new FormControl(),
    });
  }

  ngOnInit() {
    this.getPincode();
    this.getAllPincode();
    this.getService();
  }

  onChangeCheckbox(pinCode: any) {
    this.isCheck = true;

    this.selectedData.push(pinCode);
  }

  getAllPincode() {
    this.locationService.getlocation().subscribe((data) => {
      let a: any = data.location;
      for (let i = 0; i < a.length; i++) {
        this.pincodeList1.push(a[i]);
      }
    });
  }

  getPincode() {
    this.locationService.getlocation().subscribe((data) => {
      let a: any = data.location;
      for (let i = 0; i < a.length; i++) {
        if (a[i].isSelected == false) {
          this.pincodeList.push(a[i]);
        }
      }
    });
  }

  getService() {
    this.serviceService.getService().subscribe((data) => {
      let a: any = data;
      for (let i = 0; i < a.length; i++) {
        // if (a[i].isSelected == false) {
        //   this.pincodeList.push(a[i]);
        // }
        this.serviceList.push(a[i]);
      }
      // console.warn(this.serviceList['name']);
    });
  }

  createUser() {
    if (this.userData.value.userType == '1') {
      this.userData.value.userType = 'Admin';
    } else if (this.userData.value.userType == '2') {
      this.userData.value.userType = 'Manager';
    } else if (this.userData.value.userType == '3') {
      this.userData.value.userType = 'Engineer';
    } else {
      this.userData.value.userType = 'Customer';
    }
    this.userData.value.assignedEngineerToManager = this.selectedData;

    console.warn(this.userData.value);
    // post user

    this.userService.getuser().subscribe((data: any) => {
      // console.warn(data.user);
      let check = data.user;
      let checkEmail = false;
      check.map((item: any) => {
        // console.warn(item.email);
        if (item.email == this.userData.value.email) {
          checkEmail = true;
          // console.warn('same mail id');
         this. openSnackBar('User Added have same mail id!!')
          setTimeout(()=>{
            location.reload()
          },2000)

         
        }
      });

      if (!checkEmail) {
        // console.warn('not same');
        this.userService.createUser(this.userData.value).subscribe((result) => {
          console.warn(result);

          if (result) {
            this.msg = 'User Successfully Created.';
            this.router.navigate(['/admin/Registration']);
            this.openSnackBar('User Added Successfully!!')
          }
        });
      }
    });

    //update location collection

    this.locationService.getlocation().subscribe((data) => {
      let a: any;

      for (let i = 0; i < data.location.length; i++) {
        a = data.location[i];
        // console.warn(a.isSelected);
        this.selectedData.map((item: any) => {
          if (item == a.pinCode) {
            let b = {
              isSelected: true,
            };

            this.locationService.updateLocation(b, a._id).subscribe((data) => {
              console.warn(data);
            });
          }
        });
      }
    });
  }

  onChange() {
    if (this.userData.value.userType == '2') {
      this.isManagerRoleSelected = true;
    } else {
      this.isManagerRoleSelected = false;
    }

    if (this.userData.value.userType == '4') {
      this.isCustomerRoleSelected = true;
    } else {
      this.isCustomerRoleSelected = false;
    }
  }

  onChangePin() {}

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(PopupMessageComponent, {
      data: {
        message: message,
        // action: action,
        snackbar: this._snackBar,
      },
      horizontalPosition: 'right',
      verticalPosition: this.verticalPosition,
      duration:2000
    });
  }

  get userType() {
    return this.userData.get('userType');
  }
  get firstName() {
    return this.userData.get('firstName');
  }
  get lastName() {
    return this.userData.get('lastName');
  }
  get email() {
    return this.userData.get('email');
  }
  get address() {
    return this.userData.get('address');
  }
  get pinCode() {
    return this.userData.get('pinCode');
  }
  get phone() {
    return this.userData.get('phone');
  }
  get password() {
    return this.userData.get('password');
  }
  get username() {
    return this.userData.get('username');
  }
  // get service(){
  //   return this.userData.get('service')
  // }
  // get assignedEngineerToManager(){
  //   return this.userData.get('assignedEngineerToManager')
  // }

  numberOnly(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
