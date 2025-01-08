import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'cibando';
  path = "../assets/images/carousel-";
  images = [
    {
      id: 1,
      label: 'Spaghetti al pomodoro',

    },
    {
      id: 2,
      label: 'Tagliata di manzo',
    },
    {
      id: 3,
      label: 'Tiramisù classico',
    }

  ];

  allievi = ['Davide', 'Francesco', 'Maria Sole', 'Gioele' ]

}
