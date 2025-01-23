import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl = 'api/users';

  constructor(private userService : UserService, private http: HttpClient) { }

  saveStorage(res){
    const user = {
      id : res._id,
      name : res.name,
      email : res.email,
      password : res.password,
      role : res.role
    }

    localStorage.setItem('user', JSON.stringify(user))
  }

  login(email:string, password:string){
    const user = {email : email,password : password}
    return this.http.post<any>(`${this.apiBaseUrl}/login`, user)

  }

  isLogged():boolean{
    return JSON.parse(localStorage.getItem('user')) !== null;
  }
  logout(){
    localStorage.removeItem('user');
  }
}
