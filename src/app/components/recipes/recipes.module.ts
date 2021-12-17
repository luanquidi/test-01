import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { RecipesHeroComponent } from './recipes-hero/recipes-hero.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesFilterComponent } from './recipes-filter/recipes-filter.component';
import { RecipesService } from 'src/app/services/recipes.service';

// Modules
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecipesModalDetalleComponent } from './recipes-modal-detalle/recipes-modal-detalle.component';
import { UnescapePipe } from 'src/app/pipes/unescape.pipe';



@NgModule({
  declarations: [
    RecipesHeroComponent,
    RecipesListComponent,
    RecipesFilterComponent,
    RecipesModalDetalleComponent,
    UnescapePipe

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [RecipesHeroComponent, RecipesListComponent, RecipesFilterComponent, RecipesModalDetalleComponent],
  providers: [RecipesService, UnescapePipe]
})
export class RecipesModule { }
