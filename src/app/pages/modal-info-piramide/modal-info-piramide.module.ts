import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoPiramidePageRoutingModule } from './modal-info-piramide-routing.module';

import { ModalInfoPiramidePage } from './modal-info-piramide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoPiramidePageRoutingModule
  ],
  declarations: [ModalInfoPiramidePage]
})
export class ModalInfoPiramidePageModule {}
