import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
// import { RegistrationComponent } from '../registration/registration.component';
import { PopupMessageComponent } from '../popup-message/popup-message.component';
import { LocationsService } from 'src/app/services/locations.service';
import { DeletePopUpMessageComponent } from '../delete-pop-up-message/delete-pop-up-message.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  user: any = [];

  name: any;

  p: number = 1;

  currentPage!: number;

  // dataSource = new MatTableDataSource(this.user);

  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private locationService: LocationsService
  ) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.userService.getuser().subscribe((data) => {
      //  console.warn(data.user);
      this.user = data.user;
    });
  }

  getSingleData: any = [];
  getAssignedEng: any = [];
  b:any = []
  deleteUser(userType: any, id: any) {

      // this.userService.deleteUser(id).subscribe((result) => {
      //   this.fetchUser();
      //   this.openSnackBar('User Deleted Successfully!!','ok')
      // });
      this.openSnackBar1('Are you sure!!',id)

      // location.reload()
      this.fetchUser()
    
  }

  openSnackBar1(message: string,id:string) {
    this._snackBar.openFromComponent(DeletePopUpMessageComponent, {
      data: {
        message: message,
        id:id,
        snackbar: this._snackBar
        
      },
      horizontalPosition:'right',
      verticalPosition: this.verticalPosition,
      
    });
    // this.fetchUser()
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
      // duration: 1000,
    });
  }

  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      console.warn(this.user);
      
      this.user = this.user.filter((res: any) => {
        return (res.firstName.toLowerCase().match(this.name.toLowerCase())) || (res.userType.toLowerCase().match(this.name.toLowerCase())) ;
      });
    }
  }

  onTableDataChange(event: any) {
    this.currentPage = event;
    this.fetchUser();
  }
}
