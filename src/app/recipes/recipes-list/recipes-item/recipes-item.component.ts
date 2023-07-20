import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected(){
    this.recipeSelected.emit();
  }


}
