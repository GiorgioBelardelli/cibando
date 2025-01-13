import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipes.models';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  evidenziato = false;

  ricette: Recipe[] = [];

  constructor( private recipeServices:RecipeService ){
    this.recipeServices.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
        },
        error: (e) => console.log(e)
      })
  }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }
}
