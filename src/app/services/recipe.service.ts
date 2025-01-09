
import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipes.mock';
//of serve solo quando si lavora con i dati mockati come se fossero dati reali ricevuti dal backend
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipes.models';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes():Observable<Recipe[]> {

    return of (RECIPES);
  }
}
