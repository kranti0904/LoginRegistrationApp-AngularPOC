import { Injectable, Service } from '@angular/core';

// @Service()
// export class User {}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    //created an array
    users: any[] = [];
    constructor() 
    {
        
    }
    //whenever someone registers we call addUser() - which stores the user
    addUser(user: any) {
        this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
}
