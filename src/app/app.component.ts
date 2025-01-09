import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'cibando';

  evidenziato = false;

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
    //console.log("Hai cliccato il titolo");
  }
}
