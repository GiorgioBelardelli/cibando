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

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,15}$/)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, [Validators.requiredTrue])
  })

  isEqual = false;

  onSubmit(){
    console.log(this.form.value);
    const dati= {nome: this.form.controls.name.value, email: this.form.controls.email.value,}
    this.userService.datiUtente.next(dati);

    this.userService.saveUser(this.form.value).subscribe({
      next:(response) => {
        console.log("utente aggiunto ",response),
        this.router.navigateByUrl('home');
      },
      error: (e) => console.log(e)
    })
  }

  scriviInNome(e){
    console.log(e);
  }

  comparaPassword(e){

    if(e === this.form.value.password){
      this.isEqual = true;
    }else{
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
