import { Component } from '@angular/core';
import { UserService } from '../services/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users: any[] = [];
  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
