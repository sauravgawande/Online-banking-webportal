import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineer-main',
  templateUrl: './engineer-main.component.html',
  styleUrls: ['./engineer-main.component.css']
})
export class EngineerMainComponent {

  constructor(private router:Router){}

  logout(){
    localStorage.removeItem('user')
    this.router.navigate([''])
  }

}
