import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { traguito, circulo } from '../../interfaces/interfaces';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-carta-traguito',
  templateUrl: './carta-traguito.page.html',
  styleUrls: ['./carta-traguito.page.scss'],
})
export class CartaTraguitoPage implements OnInit {
  constructor(public modalCtrl: ModalController) {}
  @Input() circulo: circulo;
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };
  mostrar = false;
  tipo = '';
  numero = '';
  imagen = '/assets/cartas/carta.png';
  imagen2 = '/assets/img/informacion.png';
  ocultarSlider = false;
  carga=false;
  ngOnInit() {
    this.CartaSeleccionada();
    this.TipoCarta();
    this.carga=true;
    setTimeout(() => {
      this.ocultarSlider = true;
    }, 500);
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
  informacion = '';
   CartaSeleccionada() {
    if (this.circulo.nombre === 'A') {
      this.numero = '/assets/cartas/A.png';
      this.informacion =
        'As : Venganza (Ingresa el nombre del jugador que quieras que beba un shot).';
        return;
    }
    if (this.circulo.nombre === '2') {
      this.numero = '/assets/cartas/2.png';
      this.informacion = '2 : A vos!   (bebe un shot).';
      return;
    }
    if (this.circulo.nombre === '3') {
      this.numero = '/assets/cartas/3.png';
      this.informacion = '3 : Al Juez! (dale un shot al judaror Juez).';
      return;
    }
    if (this.circulo.nombre === '4') {
      this.numero = '/assets/cartas/4.png';
      this.informacion =
        '4 : Al mas gato! (dale un shot al jugador con los ojos mas claros).';
        return;
    }
    if (this.circulo.nombre === '5') {
      this.numero = '/assets/cartas/5.png';
      this.informacion =
        '5 : Al brinco! (di en vos alta 5 AL BRINCO y el jugador que salte al ultimo o no sate bebe un shot).';
        return;
      }
    if (this.circulo.nombre === '6') {
      this.numero = '/assets/cartas/6.png';
      this.informacion =
        '6 : Al que ves! (dale un shot al primer jugador que veas).';
        return;
    }
    if (this.circulo.nombre === '7') {
      this.numero = '/assets/cartas/7.png';
      this.informacion =
        '7 : Punch! (di 7 PUNCH y empieza el conteo de izquierda a derecha 1 2 3 4 5 6 cuando llegue al 7 o multiplo de 7 los jugadores diran punch y el conteor seguira en la direccion opuesta).';
        return;
    }
    if (this.circulo.nombre === '8') {
      this.numero = '/assets/cartas/8.png';
      this.informacion =
        '8 : Al mas morocho! (dale un shot al jugador mas joven).';
        return;
    }
    if (this.circulo.nombre === '9') {
      this.numero = '/assets/cartas/9.png';
      this.informacion =
        '9  : Al que se mueve! (di 9 al que se mueve, los jugadores deberan quedarce inmoviles en su pocision, el jugador que veas que se mueve bebera un shot).';
        return;
    }
    if (this.circulo.nombre === '10') {
      this.numero = '/assets/cartas/10.png';
      this.informacion =
        '10 : Historia! (di Historia seguido de una palabra, los jugadores a tu derecha continuaran esa historia repitiendo tu palabra y añadiendo una mas. El jugador que añada mas de una palabra o se equivoque al seguir la historia bebera un shot).';
        return;
    }
    if (this.circulo.nombre === 'J') {
      this.numero = '/assets/cartas/J.png';
      this.informacion =
        'J  : Izquierda! (dale un shot al jugador de tu izquierda).';
        return;
    }
    if (this.circulo.nombre === 'Q') {
      this.numero = '/assets/cartas/Q.png';
      this.informacion =
        'Q  : Derecha! (dale un shot al jugador de tu derecha).';
        return;
    }
    if (this.circulo.nombre === 'K') {
      this.numero = '/assets/cartas/K.png';
      this.informacion =
        'K  : Vaso! (con cada k se ira llenando la botellla virtual, el jugador que saque la 4ta K y llene la botella bebera inmediatamente un vaso).';
        return;
    }
    
  }
  async TipoCarta(){
    if (this.circulo.tipo === 'corazón') {
      this.tipo = '/assets/cartas/corazon.png';
      return;
    }
    if (this.circulo.tipo === 'trébol') {
      this.tipo = '/assets/cartas/trebol.png';
      return;
    }
    if (this.circulo.tipo === 'espadas') {
      this.tipo = '/assets/cartas/espada.png';
      return;
    }
    if (this.circulo.tipo === 'diamantes') {
      this.tipo = '/assets/cartas/diamante.png';
      return;
    }
  }

  cambiar() {
    this.mostrar = !this.mostrar;
  }
}
