import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }
 
  slideOpts={
    allowSlidePrev:false,
    allowSlideNext:false
  }
  ngOnInit() {
  }
  
  imagen = '/assets/img/carta-v1.png';
  cerrarModal(){
    this.modalCtrl.dismiss();
  }
}
