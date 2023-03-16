import { Component,OnInit } from '@angular/core';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintService } from 'src/app/services/complaint.service';


@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.css']
})
export class WipComponent implements OnInit{

  complaintList: any = []

  name: any;

  p:number = 1

  constructor(private dialog:MatDialog,private complainService:ComplaintService){}

  ngOnInit(): void {
    this.fetchComplaint()

    console.warn(this.complaintList);
    
  }

  fetchComplaint() {
    this.complainService.getComplaint().subscribe((result:any) => {
      result.map((items: any) => {

        if (items.status === 'wip' || items.status === 'WIP') {
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
