import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramidePageRoutingModule } from './piramide-routing.module';

import { PiramidePage } from './piramide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramidePageRoutingModule
  ],
  declarations: [PiramidePage]
})
export class PiramidePageModule {}
