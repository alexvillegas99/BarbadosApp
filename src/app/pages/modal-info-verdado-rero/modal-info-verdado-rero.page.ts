import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info-verdado-rero',
  templateUrl: './modal-info-verdado-rero.page.html',
  styleUrls: ['./modal-info-verdado-rero.page.scss'],
})
export class ModalInfoVerdadoReroPage implements OnInit {

  constructor( private modalCtrl:ModalController) { }
  imagen='/assets/img/informacion.png';
  ngOnInit() {
  }
  cerrar(){
this.modalCtrl.dismiss();
  }
}
