import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintService } from 'src/app/services/complaint.service';
import { ManagerService } from 'src/app/services/manager.service';
import { AssignEngineerComponent } from '../assign-engineer/assign-engineer.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';
@Component({
  selector: 'app-all-complains',
  templateUrl: './all-complains.component.html',
  styleUrls: ['./all-complains.component.css']
})
export class AllComplainsComponent implements OnInit {
  items:any;
  p:any
  name:any
  constructor( private dialog:MatDialog,private service:ManagerService,private complaintService:ComplaintService) { }

  ngOnInit(): void {
   
    this.complaintService.getComplaint().subscribe(res=>{
      this.items=res;
      console.log(res);
      
    })

  }
 
    
  
  openDialog(id:any) {
    console.log(id);
    
    this.dialog.open(ViewDetailsComponent,{
      data:id,
       width:'35%' 
    });
  }
  openDialog1(pinCode:any,_id:any,firstName:any){

     console.log("Customer",pinCode,_id,firstName);
    
    this.dialog.open(AssignEngineerComponent,{
      data:{
        _id,
        pinCode
      }
    });
}
search() {
  if (this.name == '') {
    this.ngOnInit();
  } else {
    console.warn(this.items);
    
    this.items = this.items.filter((res: any) => {
      return res.firstName.toLowerCase().match(this.name.toLowerCase());
    });
  }
}
}