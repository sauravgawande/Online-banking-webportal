import { Component ,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintService } from 'src/app/services/complaint.service';
import { ManagerService } from 'src/app/services/manager.service';
import { AssignEngineerComponent } from '../assign-engineer/assign-engineer.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';

@Component({
  selector: 'app-un-assign-complains',
  templateUrl: './un-assign-complains.component.html',
  styleUrls: ['./un-assign-complains.component.css']
})
export class UnAssignComplainsComponent implements OnInit {
items:any;
p:any
user:any
complaints:any
localStorageValues:any
status:any
assignedEngineerToManager:any[]=[]
name: any;
  constructor( private dialog:MatDialog,private complainService:ComplaintService){}
 ngOnInit(): void {
  this.getComplaints()
  this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
  this.localStorageValues = this.localStorageValues.user.assignedEngineerToManager;
  console.warn(this.localStorageValues);


 
  }

  getComplaints(){
    this.complainService.getComplaint().subscribe(res=>{
     this.items= res.filter((e:any)=>this.localStorageValues.includes(e.pinCode)&& e.status==='open')
      // this.items=res;
      
        console.log(this.items);
      // location.reload()
      
      
      
      })
   
  }
  openDialog(id:any) {
    console.log(id)
    this.dialog.open(ViewDetailsComponent,{
      data:id,
       width:'35%' 
    });
  }
  openDialog1(pinCode:any,_id:any,firstName:any){

   console.log("Customer",firstName,pinCode,_id);
    
    this.dialog.open(AssignEngineerComponent,{
      data:{
        _id,
        pinCode,
        firstName
      }
    });
// location.reload()
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
