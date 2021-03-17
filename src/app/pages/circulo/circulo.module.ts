import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CirculoPageRoutingModule } from './circulo-routing.module';

import { CirculoPage } from './circulo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CirculoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CirculoPage]
})
export class CirculoPageModule {}
