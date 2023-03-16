// import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';
// import { AssignFieldWorkerComponent } from '../assign-field-worker/assign-field-worker.component';
import { ViewDetailsComponent } from 'src/app/Manager/view-details/view-details.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-resolved-table',
  templateUrl: './resolved-table.component.html',
  styleUrls: ['./resolved-table.component.css']
})
export class ResolvedTableComponent {

  title = 'Table-Trial1';
   
  
 

  constructor(private dialog: MatDialog, private complaintService: ComplaintService) { }

  getComplaintIn: any
    getDataFromComplaint: any = []
    localStorageValues: any;
    // loginEng:string='Engineer-2'
    ngOnInit(): void {
      this.localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
    this.localStorageValues = this.localStorageValues.user.username;
      this.complaintService.getComplaint().subscribe((result) => {
        // console.log(result);
        
        result.map((items: any) => {
          if (
            items.assignUserId === this.localStorageValues &&
            items.status === 'resolved'
          ) {
            // console.log("ok");
  
            this.getDataFromComplaint.push(items);
            //  console.warn(this.getDataFromComplaint);
          }
        });
        
        })
    }
    name: any;
    p:any
    search() {
      if (this.name == '') {
        this.ngOnInit();
      } else {
        console.warn(this.getDataFromComplaint);
        this.getDataFromComplaint = this.getDataFromComplaint.filter((res: any) => {
          return res.firstName.toLowerCase().match(this.name.toLowerCase());
        });
      }
    }

    // let storedData = JSON.parse(localStorage.getItem('user') || '{}')
    // storedData = storedData.user.name
    //  console.warn(storedData);

    // this.complaintService.getComplaint().subscribe(result => {
    //   this.getDataFromComplaint=result
    //   console.log(this.getDataFromComplaint);
      
      // result.map((items: any) => {
        
        //  console.warn(items.assignedEngineer);
        // if (items.assignedEngineer == storedData) {
          //  this.getDataFromComplaint.push(items)
          // console.warn(this.getDataFromComplaint);
        // }

      // })

    // })
    
    
  // }

  
  openDialog(id: any) {

    this.dialog.open(ViewDetailsComponent, {
      width:"35%",
      data:id
    });
  }
  updateStatus(id:any,itemToAdd:any){
    this.complaintService.updateSingleStatus(id,itemToAdd)
  }
  // openDialog(id:any) {
  //   this.dialog.open(ViewDetailsComponent, {
  //     width: '35%'

  //   });
  // }
  // openAssign() {
  //   this.dialog.open(AssignFieldWorkerComponent, {

  //   });
  // }




}
