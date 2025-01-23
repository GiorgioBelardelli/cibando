//Moduli
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//modulo del routing
import { RecipeRoutingModule } from "./recipes-routing.module";

//Componenti in recipes
import { RecipesComponent } from "./recipes.component";
import { DetailComponent } from "./detail/detail.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipeCardComponent } from "../shared/recipe-card/recipe-card.component";

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    AddRecipeComponent,
    RecipesComponent,
    DetailComponent,
    RecipesListComponent,
    RecipeCardComponent,
  ],
  imports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    EditorModule,
    PaginatorModule,
    NgbModule,
    NgbCollapseModule,
    RecipeRoutingModule
  ],
  exports:[
    RecipeCardComponent,
  ] //I componenti che sono condivisi es. in futuro, recipe-card
})

export class RecipesModule{}
