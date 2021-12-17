import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { ModalService } from 'src/app/services/general/modal.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-modal-detalle',
  templateUrl: './recipes-modal-detalle.component.html',
  styleUrls: ['./recipes-modal-detalle.component.scss']
})
export class RecipesModalDetalleComponent implements OnInit {

  // Variables de componente.
  similarRecipes: any = [];
  @Input() recipe: any = {};

  constructor(
    public modalService: ModalService,
    public recipeService: RecipesService
  ) {
  }

  ngOnInit(): void {
  }

  // Función para ver mas recetas similares.
  seeMoreRecipesData(): void {
    this.recipeService.seeMoreRecipes = !this.recipeService.seeMoreRecipes;
    this.recipeService.getRecipesSimilar(this.recipe.id).subscribe((res) => {
      if(res){
        this.similarRecipes = res;
      }
    });
  }

}
