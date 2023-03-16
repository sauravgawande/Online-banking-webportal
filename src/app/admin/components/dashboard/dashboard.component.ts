import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  totalComplain: any
  totalOpen: any=0
  totalWip: any=0
  totalResolved: any=0
  totalEscalated: any=0

  constructor(private complainService: ComplaintService) { }

  ngOnInit(): void {
    this.getallComplain()
  }

  getallComplain() {
    this.complainService.getComplaint().subscribe((data) => {
      //  console.warn(data.length);
      this.totalComplain = data.length
      data.map((item: any) => {
        // console.warn(item.status);
        if (item.status == "open") {
          this.totalOpen += 1
          // console.warn(this.totalOpen);
          
        } else if (item.status == "wip" || item.status == "WIP") {
          this.totalWip += 1
          // console.warn(this.totalWip);
        } else if (item.status == "resolved") {
          this.totalResolved += 1
          // console.warn(this.totalResolved);
        } else {
          this.totalEscalated += 1
          // console.warn(this.totalEscalated);
        }

      })
    })
  }

}
