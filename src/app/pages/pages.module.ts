import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RecipesModule } from '../components/recipes/recipes.module';

// Components
import { RecipesComponent } from './recipes/recipes.component';



@NgModule({
  declarations: [RecipesComponent],
  imports: [
    CommonModule,
    RecipesModule
  ],
  exports: [RecipesComponent]
})
export class PagesModule { }
