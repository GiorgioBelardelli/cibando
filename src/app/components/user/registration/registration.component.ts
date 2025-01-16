import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  private router = inject(Router);
  private userService = inject(UserService);

  form = new FormGroup ({
    nome: new FormControl('', [Validators.required]) ,
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, [Validators.requiredTrue])
  });

  isEqual = false;

  onSubmit(){
    console.log(this.form.value);
    const dati= {nome: this.form.controls.nome.value, email: this.form.controls.email.value,}
    this.userService.datiUtente.next(dati);
    this.router.navigateByUrl('home');

  }

  scriviInNome(e){
    console.log(e);
  }

  comparaPassword(e){

    if(this.form.value.password == e){
      this.isEqual = true;
    }else if (this.form.value.password != e){
      this.isEqual = false;
    }

  }

  attivaBottone(){
    if(this.form.valid && this.isEqual===true ){
      return false;
    }else {
      return true;
    }
  }
}
