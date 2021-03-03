import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerdadORetoPage } from './verdad-oreto.page';

const routes: Routes = [
  {
    path: '',
    component: VerdadORetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerdadORetoPageRoutingModule {}
