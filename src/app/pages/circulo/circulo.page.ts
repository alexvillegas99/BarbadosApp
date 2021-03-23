import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { CartaTraguitoPage } from '../carta-traguito/carta-traguito.page';
import {  circulo } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.page.html',
  styleUrls: ['./circulo.page.scss'],
})
export class CirculoPage implements OnInit {
  //Declaracion de variables para cada carta.
  c1 = true;
  c2 = true;
  c3 = true;
  c4 = true;
  c5 = true;
  c6 = true;
  c7 = true;
  c8 = true;
  c9 = true;
  c10 = true;
  c11 = true;
  c12 = true;
  c13 = true;
  c14 = true;
  c15 = true;
  c16 = true;
  c17 = true;
  c18 = true;
  c19 = true;
  c20 = true;
  c21 = true;
  c22 = true;
  c23 = true;
  c24 = true;
  c25 = true;
  c26 = true;
  c27 = true;
  c28 = true;
  c29 = true;
  c30 = true;
  c31 = true;
  c32 = true;
  c33 = true;
  c34 = true;
  c35 = true;
  c36 = true;
  c37 = true;
  c38 = true;
  c39 = true;
  c40 = true;
  c41 = true;
  c42 = true;
  c43 = true;
  c44 = true;
  c45 = true;
  c46 = true;
  c47 = true;
  c48 = true;
  c49 = true;
  c50 = true;
  c51 = true;
  c52 = true;
  enviar:circulo;
  Cartas:circulo[]=[];
  constructor(private modalCtrl: ModalController,
              private dataService:DataService) {

  }
  centro = '/assets/Botella/k0.png'
  carta = '/assets/img/carta.png';
  carta2= '/assets/img/carta-v.png';
  ocultarSlider = false;
  ngOnInit() {
    this.dataService.getCirculo().subscribe(resp=>{
      this.Cartas=resp;
    })
    setTimeout(() => {
      this.ocultarSlider = true;
    }, 4000);
  }
  async modalCarta(){
    
    let fin = this.Cartas.length-1;
    let pos = await Math.round(Math.random() * (fin - 0) + 0);
    this.enviar = this.Cartas[pos];
     this.Cartas = await this.Cartas.filter(pre =>
      pre.id!==this.enviar.id
    )
    const modal = await this.modalCtrl.create({
      component: CartaTraguitoPage,
      componentProps: {
        'circulo': this.enviar
      }
    });
    return await modal.present();
  }
  async cambiar(id) {
    this.modalCarta();
    if (id === 1) { this.c1 = false }
    if (id === 2) { this.c2 = false }
    if (id === 3) { this.c3 = false }
    if (id === 4) { this.c4 = false }
    if (id === 5) { this.c5 = false }
    if (id === 6) { this.c6 = false }
    if (id === 7) { this.c7 = false }
    if (id === 8) { this.c8 = false }
    if (id === 9) { this.c9 = false }
    if (id === 10) { this.c10 = false; }
    if (id === 11) { this.c11 = false; }
    if (id === 12) { this.c12 = false; }
    if (id === 13) { this.c13 = false; }
    if (id === 14) { this.c14 = false; }
    if (id === 15) { this.c15 = false; }
    if (id === 16) { this.c16 = false; }
    if (id === 17) { this.c17 = false; }
    if (id === 18) { this.c18 = false; }
    if (id === 19) { this.c19 = false; }
    if (id === 20) { this.c20 = false; }
    if (id === 21) { this.c21 = false; }
    if (id === 22) { this.c22 = false; }
    if (id === 23) { this.c23 = false; }
    if (id === 24) { this.c24 = false; }
    if (id === 25) { this.c25 = false; }
    if (id === 26) { this.c26 = false; }
    if (id === 27) { this.c27 = false; }
    if (id === 28) { this.c28 = false; }
    if (id === 29) { this.c29 = false; }
    if (id === 30) { this.c30 = false; }
    if (id === 31) { this.c31 = false; }
    if (id === 32) { this.c32 = false; }
    if (id === 33) { this.c33 = false; }
    if (id === 34) { this.c34 = false; }
    if (id === 35) { this.c35 = false; }
    if (id === 36) { this.c36 = false; }
    if (id === 37) { this.c37 = false; }
    if (id === 38) { this.c38 = false; }
    if (id === 39) { this.c39 = false; }
    if (id === 40) { this.c40 = false; }
    if (id === 41) { this.c41 = false; }
    if (id === 42) { this.c42 = false; }
    if (id === 43) { this.c43 = false; }
    if (id === 44) { this.c44 = false; }
    if (id === 45) { this.c45 = false; }
    if (id === 46) { this.c46 = false; }
    if (id === 47) { this.c47 = false; }
    if (id === 48) { this.c48 = false; }
    if (id === 49) { this.c49 = false; }
    if (id === 50) { this.c50 = false; }
    if (id === 51) { this.c51 = false; }
    if (id === 52) { this.c52 = false; }
  }
  async modal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage
    });
    return await modal.present();
  }

}
