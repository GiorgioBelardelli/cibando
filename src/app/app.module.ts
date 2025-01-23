//module
import { NgModule } from '@angular/core';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipesModule } from './components/recipes/recipes.module';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';

import { Toast, ToastModule } from 'primeng/toast';
//routing
import { AppRoutingModule } from './app-routing.module';
//componenti
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/shared/header/header.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
//import { RecipeCardComponent } from './components/shared/recipe-card/recipe-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationComponent,
    ContactsComponent,
    LoginComponent,
    ProfileComponent,
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
    HttpClientModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    EditorModule,
    ToastModule,
    RecipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
