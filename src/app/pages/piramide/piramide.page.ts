import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartaPage } from '../carta/carta.page';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { ModalInfoPage } from '../modal-info/modal-info.page';
@Component({
  selector: 'app-piramide',
  templateUrl: './piramide.page.html',
  styleUrls: ['./piramide.page.scss'],
})
export class PiramidePage implements OnInit {
  //
  constructor(public modalCtrl: ModalController,
    private nativeAudio: NativeAudio) { }
  ionViewWillEnter(){
    this.nativeAudio.preloadSimple('uno', 'assets/audios/audio01.mp3');
  }
  mostrar=false;
  ngOnInit() {
    setTimeout(() => {
      this.mostrar = true;
    }, 5000);
  }
  //
  imgCartaBloqueada='/assets/img/carta-b.png';
  activar5=false;
  activar4=false;
  activar3=false;
  activar2=false;
  activar1=false;
  //Cartas
  c1 = false;
  c2 = false;
  c3 = false;
  c4 = false;
  c5 = false;
  c6 = false;
  c7 = false;
  c8 = false;
  c9 = false;
  c10 = false;
  c11 = false;
  c12 = false;
  c13 = false;
  c14 = false;
  c15 = false;
  c16 = false;
  c17 = false;
  c18 = false;
  c19 = false;
  c20 = false;
  c21 = false;
  
  imgCarta = "/assets/img/carta.png";
  imgCartaVolteada = "/assets/img/carta-v.png";
 
  async activarCartas(){
    if(this.c16 &&this.c17 &&this.c18 &&this.c19 &&this.c20 &&this.c21 ){
      this.activar5=true;
    }
    if(this.c11 &&this.c12 &&this.c13 &&this.c14 &&this.c15  ){
      this.activar4=true;
    }
    if(this.c7 &&this.c8 &&this.c9 &&this.c10 ){
      this.activar3=true;
    }
    if(this.c4 &&this.c5 &&this.c6 ){
      this.activar2=true;
    }
    if(this.c2 &&this.c3 ){
      this.activar1=true;
    }
  }
  async presentModal(carta) {
this.nativeAudio.play('uno');
    
    const modal = await this.modalCtrl.create({
      component: CartaPage
    });
    if (carta === 1) {
      this.c1 = true;
    } else if (carta === 2) {
      this.c2 = true;
    } else if (carta === 3) {
      this.c3 = true;
    } else if (carta === 4) {
      this.c4 = true;
    }
    else if (carta === 5) {
      this.c5 = true;
    }
    else if (carta === 6) {
      this.c6 = true;
    } else if (carta === 7) {
      this.c7 = true;
    } else if (carta === 8) {
      this.c8 = true;
    } else if (carta === 9) {
      this.c9 = true;
    }
    else if (carta === 10) {
      this.c10 = true;
    }
    else if (carta === 11) {
      this.c11 = true;
    } else if (carta === 12) {
      this.c12 = true;
    }
    else if (carta === 13) {
      this.c13 = true;
    } else if (carta === 14) {
      this.c14 = true;
    }
    else if (carta === 15) {
      this.c15 = true;
    } else if (carta === 16) {
      this.c16 = true;
    }
    else if (carta === 17) {
      this.c17 = true;
    }
    else if (carta === 18) {
      this.c18 = true;
    } else if (carta === 19) {
      this.c19 = true;
    }
    else if (carta === 20) {
      this.c20 = true;
    } else if (carta === 21) {
      this.c21 = true;
    }
    this.activarCartas();
    return await modal.present();
  }
  async modal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage
    });
    return await modal.present();
  }
}
