import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiariosComponent } from './pages/beneficiarios/beneficiarios.component';
import { PagamentosComponent } from './pages/pagamentos/pagamentos.component';
import { SaquesComponent } from './pages/saques/saques.component';


const routes: Routes = [
  //HOME
  {
    path: '',
    component: BeneficiariosComponent,
  },
  
  {
    path: 'beneficiarios',
    component: BeneficiariosComponent
  },

  {
    path: 'saques',
    component: SaquesComponent
  },

  {
    path: 'pagamentos',
    component: PagamentosComponent
  },

  // handling 404
  {
    path: '**',
    redirectTo: '',
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
