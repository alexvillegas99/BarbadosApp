import { Component, OnInit } from '@angular/core';
import { Nivel, VerdadOReto, Pregunta, Preguntas, Jugadores } from '../../interfaces/interfaces';
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

  constructor(private dataService: DataService,
    private dataLocalService: DataLocalService,
    private navCtrl: NavController,
    private modalCtrl: ModalController) { }
  ocultarSlider = true;
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  }
  preguntas: Pregunta[] = [];
  preguntasActivas: VerdadOReto[] = [];
  preguntaMostrar: Pregunta;
  niveles: Nivel[];
  jugadores: Jugadores[] = [];
  jugadorActual = "";
  cont: number = 0;
  tipoImagen = "/assets/img/icon.png";
  tipo = "";
  final = false;
  rotacion = true;
  imgRuleta = '/assets/circulos/ruleta.png';
  botella = '/assets/circulos/botella.png'
  verdad=false;
  desafio=false;
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
      component: ModalInfoPage
    });
    return await modal.present();
  }
  cambioARuleta(){
    this.rotarImg=false;
    this.rotacion = true;
  }
  async ruleta() {
    await this.Jugar();
    this.imgRuleta = '/assets/circulos/ruleta.png';
    this.rotarImg = true;
    let tiempoGira = 0;
    
    if (this.preguntaMostrar.id.substring(0, 1) == 'v') {
        tiempoGira = 2000;
    } else {
        tiempoGira = 3400;
    }

    setTimeout(() => {
      this.rotarImg = false;
      if(tiempoGira===2000){
        this.verdad=true;
      }else{
        this.desafio=true;
      }
      setTimeout(() => {
        this.rotacion = false;
        this.verdad=false;
        this.desafio=false;
      }, 1000);
    }, tiempoGira);
  }
  async Jugar() {
    if (this.preguntas.length > 0) {
      //Cambair de jugador
      /* this.jugadorActual = this.jugadores[this.cont].nombre;
       console.log(this.jugadorActual)
       this.cont++;
       
       if(this.cont>this.jugadores.length-1){
         this.cont=0;
       }
   */
      //Cambiar de pregunta  y quitar del arreglo
      let fin = this.preguntas.length-1;
      let pos = await Math.round(Math.random() * (fin - 0) + 0);
      this.preguntaMostrar = this.preguntas[pos];
      this.preguntas = this.preguntas.filter(pre =>
        pre.id !== this.preguntaMostrar.id
      )
      //Cambiar icono
      if (this.preguntaMostrar.id.substring(0, 1) == 'v') {
        this.tipoImagen = "/assets/img/verdad.png";
        this.tipo = "Verdad";
      } else {
        this.tipoImagen = "/assets/img/desafio.png"
        this.tipo = "Reto";
      }
    } else {
      this.tipoImagen = "/assets/img/icon.png";
      this.final = true;
    }
  }
  async cargarPreguntas() {
    this.dataService.getVR()
      .subscribe(resp => {
        this.preguntasActivas = resp;
      });

    this.niveles = await this.dataLocalService.getNiveles();
    this.niveles.forEach(nivel => {

      this.preguntasActivas.forEach(preguntas => {
        preguntas.preguntas.forEach(pregunta => {
          if (pregunta.categoria === nivel.nivel) {
            pregunta.preguntas.forEach(fin => {
              this.preguntas.push(fin);
            })
          }
        })
      })
    })
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
