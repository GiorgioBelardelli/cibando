import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Recipe } from '../../../models/recipes.models';
import { RecipeService } from '../../../services/recipe.service';




@Component({
  selector: 'app-detail',
  standalone: false,

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  // la prossima linea equivale a constructor ( private recipeServices:RecipeService )
  private recipeService = inject(RecipeService);
  private activatedRoute = inject (ActivatedRoute);
  private router = inject(Router);

  ricetta: Recipe | undefined;

  pathStelline = "../../../../assets/images/difficolta-";

  ngOnInit(): void {
    this.onGetDetail();
  }

  onGetDetail(){
    const id = this.activatedRoute.snapshot.paramMap.get("_id");
    if(id){
      this.recipeService.getDetail(id).subscribe({ next: res => {this.ricetta = res;}, error: e => console.log(e)})
    }

  }

  onGetDetail2():void {
    this.activatedRoute.params.subscribe((urlParams) => {
      const stringId = urlParams['_id'];
      const id = Number(urlParams['_id']);

      if(id){
        this.recipeService.getDetail(stringId).subscribe(res => this.ricetta = res);
      }
      //const title = urlParams['title'];
    })
  }
}
