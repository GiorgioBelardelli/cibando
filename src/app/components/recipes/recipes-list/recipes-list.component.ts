import { UserService } from './../../../services/user.service';
import { Component, DoCheck, inject } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.models';
import { pipe,take,map,first,filter, Observable } from 'rxjs';


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
export class RecipesListComponent{
  recipeService = inject(RecipeService);
  userService = inject(UserService);

  ricette: Recipe[] = [];
  titoloRicevuto: string;

  role;

  first: number = 0;
  rows: number = 10;
  page = 1;
  size = 4;

  totaleRicette: Recipe[];

  recipes$= this.recipeService.getRecipes().pipe(
    map(response => response.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 3 )),
    map(res => this.totaleRicette = res)
  )

  constructor(){
    this.role  = JSON.parse(localStorage.getItem('user')).role;

  }

  // getUser(){
  //   this.userService.getUserDetail(this.email).subscribe({

  //     next: (res) =>{
  //       this.user = res
  //     },
  //     error : (e) =>console.log(e)

  //   })
  // }

  getRecipes(){
    this.recipeService.getRecipes().pipe(first()
        /*
        //MODI PER FILTRARE LA CHIAMATA PRIMA CHE ARRIVI
        take(1),
        map((res) => res.content),
        filter()
        */
      ).subscribe({
        next: (res) => {
          this.ricette = res.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        //this.ricette = res;
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
