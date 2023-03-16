import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
// import { PopupMessageComponent } from '../popup-message/popup-message.component';
import { PopupMessageComponent } from 'src/app/admin/components/popup-message/popup-message.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  userData: any;
  changepasswordForm: boolean = false;
  localStorageValues: any;
  passwordData = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    reNewPassword: new FormControl('', [Validators.required]),
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
    this.localStorageValues = this.localStorageValues.user._id;
    // console.warn(this.localStorageValues);

    this.fetchAUser(this.localStorageValues);
  }

  fetchAUser(id: any) {
    this.userService.getSingleUser(id).subscribe((data) => {
      this.userData = data.user;
      //  console.warn(this.userData.password);
    });
  }

  changePassword() {
    this.changepasswordForm = !this.changepasswordForm;
  }

  msg:string = ' '

  changePasswordOfUser() {
    // let a = localStorage.getItem('user')
    // console.warn( a && JSON.parse(a).password);
    if(this.passwordData.value.oldPassword != '' && this.passwordData.value.newPassword != '' && this.passwordData.value.reNewPassword != ''){
      
    if (this.passwordData.value.oldPassword == this.userData.password) {
      console.warn('old and db match');

      if (
        this.passwordData.value.newPassword ==
          this.passwordData.value.reNewPassword &&
        this.passwordData.value.newPassword !=
          this.passwordData.value.oldPassword
      ) {
        // console.warn('new and confirm match');

        let password = { password: this.passwordData.value.newPassword };

        this.userService
          .updateUserPassword(password, this.localStorageValues)
          .subscribe((result) => {
            // console.warn(result);
            this.openSnackBar('User Password is Updated', 'ok');
            this.changepasswordForm = !this.changepasswordForm;
            this.msg = ''
          });
      } else {
        this.msg = 'New and Confirm Password does not match'
        console.warn(this.msg);
        
      }
    } else {
      this.msg = 'Old password is invalid'
      console.warn(this.msg);
    }
    }
    else{
      this.msg = 'Blank field not allowed'
    }


  }

  openSnackBar(message: string, action: string) {
    this._snackBar.openFromComponent(PopupMessageComponent, {
      data: {
        message: message,
        action: action,
        snackbar: this._snackBar,
      },
      horizontalPosition: 'right',
      verticalPosition: this.verticalPosition,
      
    });
  }
}
