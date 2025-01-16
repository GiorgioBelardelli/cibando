import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipes.models';
import { UserService } from '../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('modaleRegistrazione') modaleRegistrazione: ElementRef;
  evidenziato = false;
  ricette: Recipe[] = [];
  datiRegistrazione = {};
  idModale = ' ';
  nomeModale = '';

  constructor(
    private recipeServices:RecipeService,
    private userService: UserService,
    private modalService: NgbModal,
   ){
    this.recipeServices.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res.sort((a,b) => b._id - a._id).slice(0,4);
        },
        error: (e) => console.log(e)
    })

    this.userService.datiUtente.subscribe(res =>{
      console.log(res);
      localStorage.setItem('datiReg', JSON.stringify(res));
      /*
      this.datiRegistrazione = res;
      this.openModal(this.modaleRegistrazione);
      */
    });

  }

  ngAfterViewInit():void{
    this.userService.datiUtente.subscribe( res =>{
      console.log(res);
      this.datiRegistrazione = res;
      if(res != null){
        this.openModal(this.modaleRegistrazione);
      }
    })
  }

  /*
  ngOnInit():void{
    if(localStorage.getItem('datiReg')){
      this.datiRegistrazione = JSON.parse(localStorage.getItem('datiReg'));
      localStorage.removeItem('datiReg');

      this.openModal(this.modaleRegistrazione);
    }
  }
    */

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

  openModal(content:any, id?: string, nome?:string, cognome?: string){
    this.idModale = id;
    this.nomeModale = nome;
    this.modalService.open(content, {centered: true, ariaLabelledBy: 'Modale di registrazione', size: 'lg'}).result
    .then(res => {
      console.log('azione da eseguire' + res);
      this.userService.datiUtente.next(null);
    })
    .catch(error => console.log('nessuna azione da eseguire'))
  }
}
