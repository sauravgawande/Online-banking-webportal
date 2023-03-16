import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  userData: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // console.warn(this.localStorageValues);
    let localStorageValues = JSON.parse(localStorage.getItem('user') || '{}');
    localStorageValues = localStorageValues.user._id;

    // this.userService.getSingleUser(localStorageValues).subscribe((data) => {
    //   this.userData=data.user
    //   console.warn(this.userData);
    // })
    // // this.userData = this.fetchAUser(localStorageValues);

    this.fetchAUser(localStorageValues)
    
    //  console.warn(this.userData);
  }

   fetchAUser(id: any) {
     this.userService.getSingleUser(id).subscribe(
      (data) => {
      this.userData = data.user
      // console.warn(this.userData);
      
    });
  }
}
