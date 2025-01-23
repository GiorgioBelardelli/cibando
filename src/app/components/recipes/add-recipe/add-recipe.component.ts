import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from '../../../services/recipe.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-recipe',
  standalone: false,

  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {

  constructor(private recipeService:RecipeService , private router:Router, private messageService: MessageService){}

  addForm = new FormGroup ({
      title: new FormControl('', [Validators.required]) ,
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      published: new FormControl(true, [Validators.required]),
      difficulty: new FormControl(null, [Validators.required]),
    });

  onSubmit(){
    console.log(this.addForm.value);
    this.recipeService.addRecipe(this.addForm.value).subscribe({
      next: res => {
        this.router.navigateByUrl('ricette')
      },
      error: (e) => console.log(e)
    })
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
