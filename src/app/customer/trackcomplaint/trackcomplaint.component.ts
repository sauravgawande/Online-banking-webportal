import { Component, OnInit } from '@angular/core';
import { ComplaintserviceService } from '../complaintservice.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ComplaintService } from 'src/app/services/complaint.service';
import { PopupMessageComponent } from '../popup-message/popup-message.component';
import { ServiceTypeService } from 'src/app/services/service-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trackcomplaint',
  templateUrl: './trackcomplaint.component.html',
  styleUrls: ['./trackcomplaint.component.css'],
})
export class TrackcomplaintComponent implements OnInit {
  form!: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  users: any = [];

  constructor(
    private status: ComplaintserviceService,
    private formBuilder: FormBuilder,
    private complaintService: ComplaintService,
    private _snackBar: MatSnackBar
  ) {}

  localStorageValues: any;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ticketNumber: [''],
    });
  }

  submit() {
    let data1: any = [];
    this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');

    this.complaintService
      .getAuserComplaints(this.localStorageValues.user._id)
      .subscribe((data: any[]) => {
        let foundItem = false;
        data.map((item: any) => {
          if (item.ticketNumber == this.form.value.ticketNumber) {
            this.users.push(item);
            foundItem = true;
          }
        });
        if (!foundItem) {
          this.openSnackBar('Ticket Number is not valid', 'ok');
        }
      });
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
}
