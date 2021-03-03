import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartaPage } from '../carta/carta.page';
@Component({
  selector: 'app-piramide',
  templateUrl: './piramide.page.html',
  styleUrls: ['./piramide.page.scss'],
})
export class PiramidePage implements OnInit {

  constructor(public modalCtrl: ModalController) { }
  imgCarta="/assets/carta.jpg"
  ngOnInit() {
    
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CartaPage
    });
    return await modal.present();
  }
}
