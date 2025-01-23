
import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  private userService = inject(UserService)
  user;
  email;

  constructor( ){
    this.email  = JSON.parse(localStorage.getItem('user')).email;
    this.getUser()
  }

  getUser(){
    this.userService.getUserDetail(this.email).subscribe({

      next: (res) =>{
        this.user = res
      },
      error : (e) =>console.log(e)

    })
  }




}
