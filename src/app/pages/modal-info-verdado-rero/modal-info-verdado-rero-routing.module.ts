import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInfoVerdadoReroPage } from './modal-info-verdado-rero.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInfoVerdadoReroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInfoVerdadoReroPageRoutingModule {}
