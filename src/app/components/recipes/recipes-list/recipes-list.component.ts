import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { ModalService } from 'src/app/services/general/modal.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  // Se iniciliza pagina base.
  p: number = 1;
  recipeSelected: Recipe = new Recipe(0,'','',);

  constructor(
    public recipeService: RecipesService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((res) => { });
  }

  // Función para la paginación de elementos.
  changeStateTable(event: any): void {
    this.recipeService.filter.offset = event * this.recipeService.number;
    this.recipeService.getRecipes().subscribe((res) => {});
    this.p = event;
  }


  // Función para obtener información de una receta.
  getInfoRecipe(id: number): void {
    // Se reestablece link para ver recetas similares
    this.recipeService.seeMoreRecipes = false;
    // Se ejecuta la petición.
    this.recipeService.getRecipeById(id).subscribe(res => {
      if(res) {
        this.recipeSelected = res;
        this.showRecipe();
      }
    })
  }

  showRecipe(): void {
    this.modalService.showModal('modalDetailRecipe');
  }

}
