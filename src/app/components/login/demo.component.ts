import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service'
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  {

  constructor(private userService : UserService,private router:Router){}


  //login functionality

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(3),])
  })

  loginUser(){
    // console.warn(this.loginForm.value)
    
    
    this.userService.loginUser(this.loginForm.value)
    
    
  }

  // validation
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  

  //toggle form when click on forgot password button
  a:boolean = true;

  toggleForm()
  {
    this.a = !this.a
  }
  
  
}











































// goToCustomer(){
//   window.open('/customer');
// }
