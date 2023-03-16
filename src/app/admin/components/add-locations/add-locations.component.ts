import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

@Component({
  selector: 'app-add-locations',
  templateUrl: './add-locations.component.html',
  styleUrls: ['./add-locations.component.css']
})
export class AddLocationsComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  locationData = new FormGroup({
    
    area: new FormControl('', [Validators.required]),
    
    pinCode: new FormControl('', [Validators.required]),
   
  });

  constructor(
    private locationService: LocationsService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}


  createLocation(){

    this.locationService.createLocations(this.locationData.value).subscribe((result) => {
      // console.warn(result);
       location.reload();

      // this.openSnackBar('Location Added Successfully!!', 'Ok')
      
    });
    
    this.router.navigate(['/admin/location'])

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
      // duration: 3000
    });
   
  }

  get pinCode() {
    return this.locationData.get('pinCode');
  }
  get area(){
    return this.locationData.get('area')
  }

  numberOnly(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
