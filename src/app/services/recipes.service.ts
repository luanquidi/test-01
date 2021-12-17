import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ingredients, types } from './data-lists/lists-spoonacular';
import { environment } from 'src/environments/environment';
import { Recipe } from '../models/Recipe';
import { AlertService } from './general/alert.service';
import { Filter } from '../models/Filter';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  // Variables de servicio.
  number = 10;
  pageCurrent = 1;
  totalResults = 0;
  filter: Filter = new Filter('','','','','',0);
  recipes: Recipe[] = [];
  seeMoreRecipes: boolean = false;

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }


  // Función para listar los ingredientes y tipos.
  public getLists() {
    return {
      types,
      ingredients
    };
  }

  // Función para listar las recetas.
  public getRecipes(): Observable<any> {
    // Se muestra el loader.
    this.showLoader();
    // Se define url para la obtención de recetas.
    const url = `${environment.apiBaseUrl}recipes/complexSearch?apiKey=${environment.apiKey}&type=${this.filter.type}&includeIngredients=${this.filter.ingredientsQuery}&titleMatch=${this.filter.titleMatch}&sortDirection=${this.filter.sort}&number=${this.filter.number}&offset=${this.filter.offset}`;
    return this.http.get(url).pipe(
      map(
        (recipes: any) => {
          // Se oculta el loader.
          this.hideLoader();
          // Se actualiza el total de resultados.
          this.totalResults = recipes.totalResults;
          // Se almacena en local storage.
          if (recipes.results.length > 0) {
            this.recipes = recipes.results;
            this.saveToLocalStorage('list-recipes', recipes.results);
            return recipes;
          } else {
            this.alertService.showAlertToast('warning', 'No se encontrarón resultados.');
            this.recipes = [];
            this.totalResults = 0;
          }
        }
      ), catchError(
        (error: any) => {
          // Se oculta el loader.
          this.hideLoader();
          this.alertService.showAlertToast('warning', 'Ocurrió un error al cargar la información.');
          return error;
        }
      )
    )
  }

  // Función para obtener información de una receta
  public getRecipeById(id: number): Observable<any> {
    // Se muestra el loader.
    this.showLoader();
    // Se define url para la obtención de recetas.
    const url = `${environment.apiBaseUrl}recipes/${id}/information?apiKey=${environment.apiKey}`;
    return this.http.get(url).pipe(
      map(
        (recipe: any) => {
          // Se oculta el loader.
          this.hideLoader();
          // Se retorna la receta.
          return recipe;
        }
      ), catchError(
        (error: any) => {
          // Se oculta el loader.
          this.hideLoader();
          this.alertService.showAlertToast('warning', 'Ocurrió un error al cargar la información.');
          return error;
        }
      )
    )
  }


  // Función para obtener información de recetas similares.
  public getRecipesSimilar(id: number): Observable<any> {
    // Se muestra el loader.
    this.showLoader();
    // Se define url para la obtención de recetas.
    const url = `${environment.apiBaseUrl}recipes/${id}/similar?apiKey=${environment.apiKey}&number=10`;
    return this.http.get(url).pipe(
      map(
        (recipes: any) => {
          // Se oculta el loader.
          this.hideLoader();
          // Validación de existencias
          if(!recipes) this.alertService.showAlertToast('warning', 'No se encontraron recetas similares.');
          // Se retorna la receta.
          return recipes;
        }
      ), catchError(
        (error: any) => {
          // Se oculta el loader.
          this.hideLoader();
          this.alertService.showAlertToast('warning', 'Ocurrió un error al cargar la información.');
          return error;
        }
      )
    )
  }
  



  // Métodos privados
  private saveToLocalStorage(title: string, data: any): void {
    localStorage.setItem(title, JSON.stringify(data))
  }

  private showLoader(): void {
    const loader: any = document.getElementById('loader');
    loader.style.display = 'block';
  }

  private hideLoader(): void {
    const loader: any = document.getElementById('loader');
    loader.style.display = 'none';
  }
}
