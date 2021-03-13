import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoVerdadoReroPageRoutingModule } from './modal-info-verdado-rero-routing.module';

import { ModalInfoVerdadoReroPage } from './modal-info-verdado-rero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoVerdadoReroPageRoutingModule
  ],
  declarations: [ModalInfoVerdadoReroPage]
})
export class ModalInfoVerdadoReroPageModule {}
