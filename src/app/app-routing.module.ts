import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent },
  {path: '', redirectTo: '/recipes', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
