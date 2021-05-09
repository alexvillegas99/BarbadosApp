import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaTraguitoPageRoutingModule } from './carta-traguito-routing.module';

import { CartaTraguitoPage } from './carta-traguito.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaTraguitoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CartaTraguitoPage]
})
export class CartaTraguitoPageModule {}
