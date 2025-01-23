
import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipes.mock';
//of serve solo quando si lavora con i dati mockati come se fossero dati reali ricevuti dal backend
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipes.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiBaseUrl = 'api/recipes';

  constructor(private http: HttpClient) { }

  getRecipes():Observable<Recipe[]> {

    //return of (RECIPES);
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }

  getDetail(id:string): Observable<Recipe | undefined>{

    //const recipe = RECIPES.find(ricetta => ricetta._id === id);
    //return of (recipe);

    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

    addRecipe(ricetta : Recipe | any): Observable<Recipe | undefined>{
     return this.http.post<any>(`${this.apiBaseUrl}/`, ricetta)
  }
}
