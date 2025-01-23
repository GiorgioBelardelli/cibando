import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Recipe } from '../../../models/recipes.models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  // con la riga di codice sotto stiamo dicendo che ricette è un array di una variabile Recipe(tipizzata come abbiamo scritto nel model)
  // ed è di tipo Inputo, ovvero predisposta a venire popolata da qualcun altro (nel nostro caso, il padre    )
  @Input() recipe: Recipe | undefined;
  @Input() page: string;
  @Output() messaggio = new EventEmitter();

  private sanitizer = inject(DomSanitizer);

  inviaTitolo(titolo:string){
    this.messaggio.emit(titolo);
  }

  getSanitizeHTML(descrizione:string){
    const tagliaDescrizione = this.accorciaDescrizione(descrizione);
    const sanificaDescrizione = this.sanitizer.bypassSecurityTrustHtml(tagliaDescrizione);
    return sanificaDescrizione;
  }

  accorciaDescrizione(descrizione:string):string{
    const lunghezzaDescrizione = 200;
    if(descrizione.length <= lunghezzaDescrizione){
      return descrizione.slice(0, lunghezzaDescrizione);
    } else {
      const ultimaPosizioneSpazio = descrizione.lastIndexOf(" ", lunghezzaDescrizione);
      return descrizione.slice(0, ultimaPosizioneSpazio)
    }
  }
}
