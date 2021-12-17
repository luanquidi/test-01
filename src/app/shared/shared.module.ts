import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent]
})
export class SharedModule { }
