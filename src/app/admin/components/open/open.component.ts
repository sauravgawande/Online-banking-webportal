import { Component, OnInit } from '@angular/core';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComplaintService } from '../../../services/complaint.service'
import { complain } from 'dataType';
import { MatTable, MatTableDataSource } from '@angular/material/table';
 







@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {
  complaintList: any = []
  p: number = 1;
  name: any;
  constructor(private dialog: MatDialog, private complainService: ComplaintService) { }

  ngOnInit(): void {
    this.fetchComplaint()
  }

  fetchComplaint() {
    this.complainService.getComplaint().subscribe((result) => {
      result.map((items: any) => {

        if (items.status === 'open') {
          this.complaintList.push(items)
        }

      })
    })
  }

  openDialog(id: any) {

    this.dialog.open(CustomerDetailsComponent, {
      width:"35%",
      data:id
    });


  }

  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      console.warn(this.complaintList);
      
      this.complaintList = this.complaintList.filter((res: any) => {
        return res.firstName.toLowerCase().match(this.name.toLowerCase());
      });
    }
  }

}
