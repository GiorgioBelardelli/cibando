import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.models';


@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
  ricette: Recipe[] = [];
  titoloRicevuto: string;

    constructor( private recipeServices:RecipeService ){
      this.recipeServices.getRecipes().subscribe({
          next: (res) => {
            this.ricette = res;
          },
          error: (e) => console.log(e)
      })
    }

  riceviTitolo(event){
    this.titoloRicevuto = event;
  }
}
