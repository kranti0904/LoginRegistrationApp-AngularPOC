import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { UserService } from '../services/user';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  successMessage="";
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  registerUser(registerForm:any) {
    //console.log(this.user);
    //Angular stores the same object reference
    this.userService.addUser({...this.user});
    this.successMessage="Registration Successful";
    //after this method execution user lists also becomes empty. Therefore I use {...this.user} which creates a copy.
    registerForm.resetForm();
    //alert("Registration Successfully");
  }

  //Inject service into register component which I did above and we will inject it inside constructor
  constructor(private userService:UserService)
  {

  }
}
