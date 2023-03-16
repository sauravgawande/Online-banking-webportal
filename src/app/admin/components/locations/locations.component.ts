import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
// import { RegistrationComponent } from '../registration/registration.component';
import { PopupMessageComponent } from '../popup-message/popup-message.component';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  user:any = []

  name:any

  p:number = 1

  currentPage!: number;

  // dataSource = new MatTableDataSource(this.user);

  constructor(private locationService:LocationsService, private router:Router,private _snackBar: MatSnackBar) { }
  ngOnInit(): void {

    this.fetchLocation()
    
  }

  fetchLocation(){
    this.locationService.getlocation().subscribe(
      (data)=>{
        //  console.warn(data.location);
         this.user = data.location
        
      }
      
    )
  }

  deleteUser(id:any){
     console.log(id);
    this.locationService.deleteLocation(id).subscribe((result)=>{
      // console.warn(result);
      this.openSnackBar('User Deleted Successfully!!', 'Ok')
      this.fetchLocation()
    })
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.openFromComponent(PopupMessageComponent, {
      data: {
        message: message,
        action: action,
        snackbar: this._snackBar

      },
      horizontalPosition: 'right',
      verticalPosition: this.verticalPosition,
      
    })
  }


  

  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      console.warn(this.user);
      
      this.user = this.user.filter((res: any) => {
        return res.area.toLowerCase().match(this.name.toLowerCase());
      });
    }
  }

  // onTableDataChange(event: any) {
  //   this.currentPage = event;
  //   this.fetchUser();
  // }
 

}
