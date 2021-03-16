import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiramidePageRoutingModule } from './piramide-routing.module';

import { PiramidePage } from './piramide.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiramidePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PiramidePage]
})
export class PiramidePageModule {}
