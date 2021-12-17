import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RecipesModule } from './recipes/recipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RecipesModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ComponentsModule { }
