import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.page.html',
  styleUrls: ['./circulo.page.scss'],
})
export class CirculoPage implements OnInit {

  constructor(private modalCtrl:ModalController){

  }
  centro='/assets/img/icon.png'
  carta='/assets/img/carta.png';
  ocultarSlider=false;
  ngOnInit() {
    setTimeout(() => {
      this.ocultarSlider=true;
    }, 4000);
  }
  async cambiar(){
    
  }
  async modal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage
    });
    return await modal.present();
  }

}
