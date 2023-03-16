import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { PopupMessageComponent } from '../popup-message/popup-message.component';
import { Validators } from '@angular/forms';
import { ServiceTypeService } from 'src/app/services/service-type.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ServiceData = new FormGroup({
    
    name: new FormControl('', [Validators.required]),
    
    // pinCode: new FormControl('', [Validators.required]),
   
  });

  constructor(
    private serviceTypeService:ServiceTypeService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}


  createLocation(){

    this.serviceTypeService.createService(this.ServiceData.value).subscribe((result)=>{
      // console.warn(result);
      this.openSnackBar("Service added successfully!!",'ok')
    })
    
    this.router.navigate(['/admin/serviceType'])

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
      // duration: 1000
    });
   
  }

  get name(){
    return this.ServiceData.get('name')
  }


}
