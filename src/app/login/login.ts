import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  successMessage="";
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  loginUser(loginForm:any) {
    console.log(this.user);
    this.successMessage="Login Successful";
    loginForm.resetForm();
    //alert("Registration Successfully");
  }
}
