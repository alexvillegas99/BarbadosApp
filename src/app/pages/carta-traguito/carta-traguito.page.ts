import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { traguito, circulo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-carta-traguito',
  templateUrl: './carta-traguito.page.html',
  styleUrls: ['./carta-traguito.page.scss'],
})
export class CartaTraguitoPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }
  @Input() circulo:circulo;
   slideOpts={
     allowSlidePrev:false,
     allowSlideNext:false
   }
   tipo='';
   numero='';
   imagen = '/assets/cartas/carta.png';
   ngOnInit() {
     this.CartaSeleccionada();
   }
   CartaSeleccionada(){
      if(this.circulo.nombre ==='A'){
this.numero ='/assets/cartas/A.png';
      }
      if(this.circulo.nombre ==='2'){
        this.numero ='/assets/cartas/2.png';
      }
      if(this.circulo.nombre ==='3'){
        this.numero ='/assets/cartas/3.png';
      }
      if(this.circulo.nombre ==='4'){
        this.numero ='/assets/cartas/4.png';
      }
      if(this.circulo.nombre ==='5'){
        this.numero ='/assets/cartas/5.png';
      }
      if(this.circulo.nombre ==='6'){
        this.numero ='/assets/cartas/6.png';
      }
      if(this.circulo.nombre ==='7'){
        this.numero ='/assets/cartas/7.png';
      }
      if(this.circulo.nombre ==='8'){
        this.numero ='/assets/cartas/8.png';
      }
      if(this.circulo.nombre ==='9'){
        this.numero ='/assets/cartas/9.png';
      }
      if(this.circulo.nombre ==='10'){
        this.numero ='/assets/cartas/10.png';
      }
      if(this.circulo.nombre ==='J'){
        this.numero ='/assets/cartas/J.png';
      }
      if(this.circulo.nombre ==='Q'){
        this.numero ='/assets/cartas/Q.png';
      }
      if(this.circulo.nombre ==='K'){
        this.numero ='/assets/cartas/K.png';
      }
      if(this.circulo.tipo==='corazón'){
        this.tipo ='/assets/cartas/corazon.png';
      }
      if(this.circulo.tipo==='trébol'){
        this.tipo ='/assets/cartas/trebol.png';
      }
      if(this.circulo.tipo==='espadas'){
        this.tipo ='/assets/cartas/espada.png';
      }
      if(this.circulo.tipo==='diamantes'){
        this.tipo ='/assets/cartas/diamante.png';
      }
   }

   cerrarModal(){
     this.modalCtrl.dismiss();
   }

}
