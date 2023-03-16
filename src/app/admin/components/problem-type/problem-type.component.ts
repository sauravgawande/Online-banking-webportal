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
import { ServiceTypeService } from 'src/app/services/service-type.service';
import { ProblemTypeService } from 'src/app/services/problem-type.service';


@Component({
  selector: 'app-problem-type',
  templateUrl: './problem-type.component.html',
  styleUrls: ['./problem-type.component.css']
})
export class ProblemTypeComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  user:any = []

  name:any

  p:number = 1

  currentPage!: number;

  // dataSource = new MatTableDataSource(this.user);

  constructor( private router:Router,private _snackBar: MatSnackBar,private problemServoce:ProblemTypeService) { }

  ngOnInit(): void {

    this.fetchLocation()
    
  }

  fetchLocation(){
    this.problemServoce.getService().subscribe(
      (data)=>{
         console.warn(data);
          this.user = data
        
      }
      
    )
  }

  deleteUser(id:any){
    //  console.log(id);
    // this.locationService.deleteLocation(id).subscribe((result)=>{
    //   // console.warn(result);
    //   this.fetchLocation()
    // })
    
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
      // duration:1000
    })
  }


  

  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      // console.warn(this.user);
      
      this.user = this.user.filter((res: any) => {
        return res.name.toLowerCase().match(this.name.toLowerCase());
      });
    }
  }

  changeValueOfisActive(event:any,id:any){
    //  console.warn(event.target.checked,id);
    let isActive = {isActive:event.target.checked};
    this.problemServoce.updateIsActive(isActive,id).subscribe((data)=>{
      // console.warn(data);
      this.openSnackBar("Problem status changed successfully!!",'ok')
      this.fetchLocation()
      
    })
    
  }

}
