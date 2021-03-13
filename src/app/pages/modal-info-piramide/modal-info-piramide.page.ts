import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info-piramide',
  templateUrl: './modal-info-piramide.page.html',
  styleUrls: ['./modal-info-piramide.page.scss'],
})
export class ModalInfoPiramidePage implements OnInit {

  constructor(private modalCtrl:ModalController) { }
  imagen='/assets/img/informacion.png';
  ngOnInit() {
  }
  cerrar(){
    this.modalCtrl.dismiss();
      }
}
