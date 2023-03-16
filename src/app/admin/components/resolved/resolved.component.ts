import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { ComplaintService } from 'src/app/services/complaint.service';



@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.css']
})
export class ResolvedComponent {

  complaintList: any = []

  name: any;

  p:number=1;

  constructor(private dialog:MatDialog,private complainService:ComplaintService){}

  ngOnInit(): void {
    this.fetchComplaint()
  }

  fetchComplaint() {
    this.complainService.getComplaint().subscribe((result) => {
      result.map((items: any) => {

        if (items.status === 'resolved') {
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
