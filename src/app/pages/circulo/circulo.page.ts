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
  reiniciar=false;
  contador=0;
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
    if(this.Cartas.length===0){
      this.reiniciar=true;
    }
    //

    if(this.enviar.nombre==='K'){
this.contador++;
if(this.contador===1){
  this.centro = '/assets/Botella/k1.png';
}else if(this.contador===2){
  this.centro = '/assets/Botella/k2.png';
}else if(this.contador==3){
  this.centro = '/assets/Botella/k3.png';
}else if(this.contador==4){
  this.centro = '/assets/Botella/k4.png';
  this.enviar.texto='Sacaste la cuarta K toma vaso lleno!!';
}
    }
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
      component: ModalInfoPage,
      componentProps: {
        'informacion': 'El objetivo de este juego es chumarce con una botella de Barbados 1569 los jugadores'+
        'designaran un juez, el jugador con los ojos mas claros sera conocido como el mas gato,'+
        'el jugador de menor edad sera conocido como el mas morocho luego de designar los roles'+
        'los jugadores se pasaran el teléfono de izquierda a derecha y escogerán una carta.'
      }
    });
    return await modal.present();
  }
async reiniciarJuego(){
  this.reiniciar=false;
  this.centro = '/assets/Botella/k0.png'
this.contador==0;
this.dataService.getCirculo().subscribe(resp=>{
  this.Cartas=resp;
})
this.c1 = true;
this.c2 = true;
this.c3 = true;
this.c4 = true;
this.c5 = true;
this.c6 = true;
this.c7 = true;
this.c8 = true;
this.c9 = true;
this.c10 =true;
this.c11= true;
this.c12 =true;
this.c13 =true;
this.c14 =true;
this.c15 =true;
this.c16 =true;
this.c17 =true;
this.c18 =true;
this.c19 =true;
this.c20 =true;
this.c21 =true;
this.c22 =true;
this.c23 =true;
this.c24 =true;
this.c25 =true;
this.c26 =true;
this.c27 =true;
this.c28 =true;
this.c29 =true;
this.c30 =true;
this.c31 =true;
this.c32 =true;
this.c33 =true;
this.c34 =true;
this.c35 =true;
this.c36 =true;
this.c37 =true;
this.c38 =true;
this.c39 =true;
this.c40 =true;
this.c41 =true;
this.c42 =true;
this.c43 =true;
this.c44 =true;
this.c45 =true;
this.c46 =true;
this.c47 =true;
this.c48 =true;
this.c49 =true;
this.c50 =true;
this.c51 =true;
this.c52 =true;
}
}
