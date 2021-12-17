import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesService } from './recipes.service';
import { AlertService } from './general/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalService } from './general/modal.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [RecipesService, AlertService, ModalService]
})
export class ServicesModule { }
