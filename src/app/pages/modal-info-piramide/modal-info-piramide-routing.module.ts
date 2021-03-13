import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInfoPiramidePage } from './modal-info-piramide.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInfoPiramidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInfoPiramidePageRoutingModule {}
