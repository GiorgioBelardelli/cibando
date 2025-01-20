import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../models/recipes.models';

@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  // con la riga di codice sotto stiamo dicendo che ricette è un array di una variabile Recipe(tipizzata come abbiamo scritto nel model)
  // ed è di tipo Inputo, ovvero predisposta a venire popolata da qualcun altro (nel nostro caso, il padre    )
  @Input() recipe: Recipe | undefined;
  @Input() page: string;
  @Output() messaggio = new EventEmitter();

  inviaTitolo(titolo:string){
    this.messaggio.emit(titolo);
  }
}
