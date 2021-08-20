
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormsComponent } from './componentes/products-forms/products-forms.component';

const routes: Routes = [
 {
   path: 'create',
   component:ProductsFormsComponent
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
