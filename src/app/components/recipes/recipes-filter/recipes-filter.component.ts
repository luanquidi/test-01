import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-filter',
  templateUrl: './recipes-filter.component.html',
  styleUrls: ['./recipes-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesFilterComponent implements OnInit {

  // Variables de componente
  form: FormGroup;
  types: any[] = [];
  ingredients: any[] = [];
  dropdownSettings = {};
  selectedItems: any = [];
  offsetInput: string = '';


  constructor(
    private recipeService: RecipesService,
    private fb: FormBuilder
  ) {
    // Función para crear formulario.
    this.form = this.fb.group({
      typeInput: ['', []],
      keywordInput: ['', []],
      ingredientsInput: ['', []],
      sortInput: ['', []],
      numberInput: ['', []],
    })

  }


  ngOnInit(): void {
    // Se carga la información de las listas.
    this.loadInfo();

    // Configuración select multiple
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'description',
      selectAllText: 'Seleccionar todos',
      unSelectAllText: 'Limpiar selección',
      allowSearchFilter: true
    };
  }


  // Función para enviar el formulario.
  sendForm(): void {

    // Se setea información del filtro.
    this.recipeService.filter.titleMatch = this.form.value.keywordInput;
    this.recipeService.filter.ingredientsQuery = this.buildIngredients();
    this.recipeService.filter.type =  this.form.value.typeInput;
    this.recipeService.filter.sort = this.form.value.sortInput
    this.recipeService.filter.number =this.form.value.numberInput

    // Se ejecuta consulta.
    this.recipeService.getRecipes().subscribe(res => {});

  }


  // Función para cargar información de las listas.
  loadInfo(): void {
    // Asignación de listas.
    this.types = this.recipeService.getLists().types;
    this.ingredients = this.recipeService.getLists().ingredients;
  }

  // Función para construir sentencia de los ingredientes separados por comas.
  buildIngredients(): string {
    let textIngredients = '';
    this.selectedItems.map((item: any) => {
      textIngredients += `${item.description},`;
    });
    return textIngredients;
  }

  // Función cuando se selecciona un ingrediente.
  onItemSelect(item: any) {
    this.selectedItems.push(item);
  }

  // Función para seleccionar todos los items.
  onSelectAll(items: any) {
    this.selectedItems = this.ingredients;
  }



}
