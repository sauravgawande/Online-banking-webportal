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
import { ProblemTypeService } from 'src/app/services/problem-type.service';


@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent {

  
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ServiceData = new FormGroup({
    
    name: new FormControl('', [Validators.required]),
    
    // pinCode: new FormControl('', [Validators.required]),
   
  });

  constructor(
    private problemService:ProblemTypeService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}


  createLocation(){

    this.problemService.createService(this.ServiceData.value).subscribe((result)=>{
      // console.warn(result);
      this.openSnackBar('Problem Added Successfully!!', 'Ok')
    })
    
    this.router.navigate(['/admin/problemType'])

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
