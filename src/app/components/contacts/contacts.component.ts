import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: false,

  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  constructor(
    private userService:UserService,
    private router: Router
  ){}

  form = new FormGroup ({
    nome: new FormControl('', [Validators.required]) ,
    email: new FormControl('', [Validators.required, Validators.email]),
    oggetto: new FormControl('', [Validators.required]),
    messaggio: new FormControl(false, [Validators.required])
  });

  isEqual = false;

  onSubmit(){
    if (this.form.valid) {
      console.log('Form:', this.form.value);
    } else {
      console.log('Form non valido');
    }
    this.router.navigateByUrl('home');
    /*
    console.log(this.form.value);
    const dati= {nome: this.form.controls.nome.value, email: this.form.controls.email.value,}
    this.userService.datiUtente.next(dati);
    */
  }

  attivaBottone(){
    if(this.form.valid){
      return false;
    }else {
      return true;
    }
  }
}
