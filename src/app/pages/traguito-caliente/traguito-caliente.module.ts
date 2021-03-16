import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraguitoCalientePageRoutingModule } from './traguito-caliente-routing.module';

import { TraguitoCalientePage } from './traguito-caliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraguitoCalientePageRoutingModule
  ],
  declarations: [TraguitoCalientePage]
})
export class TraguitoCalientePageModule {}
