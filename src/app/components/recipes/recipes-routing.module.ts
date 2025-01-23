//Moduli vitali
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
//Guard per nuova ricetta
import { roleGuardGuard } from "../../role-guard.guard";
//componenti
import { RecipesComponent } from "./recipes.component";
import { DetailComponent } from "./detail/detail.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";

const routes: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path: 'dettaglio/:_id', component: DetailComponent},
    {path: 'aggiungi-ricetta', component: AddRecipeComponent, canActivate:[roleGuardGuard]},
    {path: '', component: RecipesListComponent, pathMatch: 'full'},
    ]},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipeRoutingModule{ }
