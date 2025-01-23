import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck {
  isCollapsed = true;
  user;

  constructor (private router:Router, public authService: AuthService){

  }

  //hook lifecycle
  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !==null){
        this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
