import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraguitoCalientePage } from './traguito-caliente.page';

const routes: Routes = [
  {
    path: '',
    component: TraguitoCalientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraguitoCalientePageRoutingModule {}
