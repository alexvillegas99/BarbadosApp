import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CirculoPage } from './circulo.page';

const routes: Routes = [
  {
    path: '',
    component: CirculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CirculoPageRoutingModule {}
