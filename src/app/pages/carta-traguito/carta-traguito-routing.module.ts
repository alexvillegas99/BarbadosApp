import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaTraguitoPage } from './carta-traguito.page';

const routes: Routes = [
  {
    path: '',
    component: CartaTraguitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaTraguitoPageRoutingModule {}
