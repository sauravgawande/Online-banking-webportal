import { Component,Inject,OnInit } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { PopupMessageComponent } from '../popup-message/popup-message.component';


@Component({
  selector: 'app-delete-pop-up-message',
  templateUrl: './delete-pop-up-message.component.html',
  styleUrls: ['./delete-pop-up-message.component.css']
})
export class DeletePopUpMessageComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any ,private _snackBar: MatSnackBar,private userService:UserService){}

  ngOnInit(): void {
    
  }



  deleteUser(id:any){
    // console.warn(id);
    this.userService.deleteUser(id).subscribe((result) => {
        //  this.fetchUser();
        this.openSnackBar('User Deleted Successfully!!','ok')
      });
    
  }

  // fetchUser() {
  //   this.userService.getuser().subscribe((data) => {
  //     //  console.warn(data.user);
  //     this.user = data.user;
  //   });
  // }

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

  closeSnackbar(){
    this.data.snackbar.dismiss()
  }

}
