import { Component, OnInit } from '@angular/core';
import {
  Nivel,
  VerdadOReto,
  Pregunta,
  Preguntas,
  Jugadores,
} from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import { DataService } from '../../services/data.service';
import { ModalController, NavController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-verdad-oreto',
  templateUrl: './verdad-oreto.page.html',
  styleUrls: ['./verdad-oreto.page.scss'],
})
export class VerdadORetoPage implements OnInit {
  constructor(
    private dataService: DataService,
    private dataLocalService: DataLocalService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}
  ocultarSlider = true;
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };
  preguntas: Pregunta[] = [];
  preguntasActivas: VerdadOReto[] = [];
  preguntaMostrar: Pregunta;
  niveles: Nivel[];
  jugadores: Jugadores[] = [];
  jugadorActual = '';
  cont: number = 0;
  tipoImagen = '/assets/img/icon.png';
  tipo = '';
  final = false;
  rotacion = true;
  imgRuleta = '/assets/circulos/ruleta.png';
  botella = '/assets/circulos/botella.png';
  verdad1 = false;
  verdad2 = false;
  verdad3 = false;
  verdad4 = false;
  desafio1 = false;
  desafio2 = false;
  desafio3 = false;
  desafio4 = false;
  rotarImg = true;
  ngOnInit() {
    //
    this.final = false;
    this.cargarPreguntas();
    setTimeout(() => {
      this.ocultarSlider = false;
      this.cambioARuleta();
    }, 4000);
  }
  async modal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        informacion:
          'Bienvenido. Este juego no nesesita de explicacines ' +
          'Los jugadores se pasan el telefono de izquierda a derech giraran ' +
          'la botella y haran lo que diga el Capitan. (El Jugador que vio este mensaje bebe un shot!)',
      },
    });
    return await modal.present();
  }
  cambioARuleta() {
    this.rotarImg = false;
    this.rotacion = true;
  }
  async ruleta() {
    await this.Jugar();
    this.imgRuleta = '/assets/circulos/ruleta.png';
    this.rotarImg = true;
    let tiempoGira = 0;

    if (this.preguntaMostrar.id.substring(0, 1) == 'v') {
      let pos = await Math.round(Math.random() * (3 - 1) + 0);
      if (pos == 1) {
        tiempoGira = 1000;
      } else if (pos == 2) {
        tiempoGira = 1200;
      } else if (pos == 3) {
        tiempoGira = 1400;
      } else {
        tiempoGira = 1600;
      }
    } else {
      let pos = await Math.round(Math.random() * (3 - 1) + 0);
      if (pos == 1) {
        tiempoGira = 1100;
      } else if (pos == 2) {
        tiempoGira = 1300;
      } else if (pos == 3) {
        tiempoGira = 1500;
      } else {
        tiempoGira = 1700;
      }
    }
console.log(tiempoGira)
    setTimeout(() => {
      this.rotarImg = false;
      if (tiempoGira === 1000) {
        this.verdad1 = true;
      } else if (tiempoGira === 1200) {
        this.verdad2 = true;
      } else if (tiempoGira === 1400) {
        this.verdad3 = true;
      } else if (tiempoGira === 1600) {
        this.verdad4 = true;
      } else if (tiempoGira === 1100) {
        this.desafio1 = true;
      } else if (tiempoGira === 1300) {
        this.desafio2 = true;
      } else if (tiempoGira === 1500) {
        this.desafio3 = true;
      } else if (tiempoGira === 1700) {
        this.desafio4 = true;
      }
      setTimeout(() => {
        this.rotacion = false;
        this.verdad1 = false;
        this.verdad2 = false;
        this.verdad3 = false;
        this.verdad4 = false;
        this.desafio1 = false;
        this.desafio2 = false;
        this.desafio3 = false;
        this.desafio4 = false;
      }, 1000);
    }, tiempoGira);
  }
  async Jugar() {
    if (this.preguntas.length > 0) {
      let fin = this.preguntas.length - 1;
      let pos = await Math.round(Math.random() * (fin - 0) + 0);
      this.preguntaMostrar = this.preguntas[pos];
      this.preguntas = this.preguntas.filter(
        (pre) => pre.id !== this.preguntaMostrar.id
      );
      //Cambiar icono
      if (this.preguntaMostrar.id.substring(0, 1) == 'v') {
        this.tipoImagen = '/assets/img/verdad.png';
        this.tipo = 'Verdad';
      } else {
        this.tipoImagen = '/assets/img/desafio.png';
        this.tipo = 'Reto';
      }
    } else {
      this.tipoImagen = '/assets/img/icon.png';
      this.final = true;
    }
  }
  async cargarPreguntas() {
    this.dataService.getVR().subscribe((resp) => {
      this.preguntasActivas = resp;
    });

    this.niveles = await this.dataLocalService.getNiveles();
    this.niveles.forEach((nivel) => {
      this.preguntasActivas.forEach((preguntas) => {
        preguntas.preguntas.forEach((pregunta) => {
          if (pregunta.categoria === nivel.nivel) {
            pregunta.preguntas.forEach((fin) => {
              this.preguntas.push(fin);
            });
          }
        });
      });
    });
    this.Jugar();
  }
  reiniciar() {
    this.cargarPreguntas();
    this.final = false;
  }
  salir() {
    this.navCtrl.navigateForward('/inicio');
  }
}
