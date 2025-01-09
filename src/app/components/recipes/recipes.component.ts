import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipes.models';

@Component({
  selector: 'app-recipes',
  standalone: false,

  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {

  ricette: Recipe[] = [];

  constructor( private recipeServices:RecipeService ){
    this.recipeServices.getRecipes().subscribe({
        next: (res) => {
          this.ricette = res;
        },
        error: (e) => console.log(e)
    })
  }
}
