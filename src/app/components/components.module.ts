import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga/carga.component';




@NgModule({
  declarations: [CargaComponent],
  exports:[CargaComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
