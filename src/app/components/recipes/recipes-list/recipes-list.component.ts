import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.models';
import { PaginatorModule } from 'primeng/paginator';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'

})
export class RecipesListComponent {
  ricette: Recipe[] = [];
  titoloRicevuto: string;

  first: number = 0;
  rows: number = 10;
  page = 1;
  size = 4;

  constructor( private recipeServices:RecipeService ){
      this.recipeServices.getRecipes().subscribe({
        next: (res) => {
        this.ricette = res;
      },
      error: (e) => console.log(e)
    })
  }

  onPageChange(event) {
    event.page = event.page +1;
    this.size = event.rows;
    this.page = event.page;
  }


  riceviTitolo(event){
    this.titoloRicevuto = event;
  }
}
