//module
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { PaginatorModule } from 'primeng/paginator';
//routing
import { AppRoutingModule } from './app-routing.module';
//componenti
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RecipeCardComponent } from './components/shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeCardComponent,
    DetailComponent,
    RecipesListComponent,
    RegistrationComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbAccordionModule,
    NgbModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
