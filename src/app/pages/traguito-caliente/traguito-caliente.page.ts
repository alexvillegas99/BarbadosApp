import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-traguito-caliente',
  templateUrl: './traguito-caliente.page.html',
  styleUrls: ['./traguito-caliente.page.scss'],
})
export class TraguitoCalientePage implements OnInit {

  constructor(private modalCtrl:ModalController) { }
  ocultarSlider=false;
  tipoImagen = "/assets/img/icon.png";
  ngOnInit() {
    setTimeout(() => {
      this.ocultarSlider=true;
    }, 4000);
  }
  async modal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage
    });
    return await modal.present();
  }
jugar(){
  
}
}

