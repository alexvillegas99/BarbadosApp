import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerdadORetoPageRoutingModule } from './verdad-oreto-routing.module';

import { VerdadORetoPage } from './verdad-oreto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerdadORetoPageRoutingModule
  ],
  declarations: [VerdadORetoPage]
})
export class VerdadORetoPageModule {}
