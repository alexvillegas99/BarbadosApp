import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { Jugadores, traguito } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-traguito-caliente',
  templateUrl: './traguito-caliente.page.html',
  styleUrls: ['./traguito-caliente.page.scss'],
})
export class TraguitoCalientePage implements OnInit {
  Jugadores: Jugadores[] = [];
  PreguntasH: traguito[] = [];
  PreguntasM: traguito[] = [];
  PreguntasT: traguito[] = [];
  JugadoresAux:Jugadores[]=[];
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  }
  final=false;
  generos=1;
  genero='';
  jugadorActual: Jugadores={
    nombre:'',
    genero:''
  };
  todos:Jugadores={
    nombre: "Todos", genero: ""
  }
  PreguntaActual: traguito = {
    categoria: '',
    genero: '',
    tipo: '',
    texto: ''
  };
  cont = 0;
  constructor(private modalCtrl: ModalController,
    private dataService: DataService,
    private dataLocalService:DataLocalService) { }
  ocultarSlider = false;
  imagen="/assets/img/traguito-caliente.png";
  tipoImagen = "/assets/img/icon.png";
  ngOnInit() {
    this.dataLocalService.getJugadores();
    this.Jugadores = this.dataLocalService.jugadores;
    let g = this.Jugadores[0].genero;
    this.Jugadores.forEach(elemento=>{
      if(elemento.genero!==g){
        this.generos=2;
      }
    })
    this.JugadoresAux=this.Jugadores;
    if(this.generos==1){
    this.genero==this.Jugadores[0].genero;
    }
    //Carga de preguntas
    this.getPreguntas();

    setTimeout(() => {
      this.ocultarSlider = true;
      this.jugar();
    }, 4000);
  }

  async getPreguntas() {
    await this.dataService.getTraguito().subscribe(resp => {
      resp.forEach(pregunta => {
        if (pregunta.genero === 'masculino') {
          this.PreguntasH.push(pregunta);
        } else if (pregunta.genero === 'femenino') {
          this.PreguntasM.push(pregunta);
        } else {
          this.PreguntasT.push(pregunta);
        }
      })
    })
  }

  async modal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage
    });
    return await modal.present();
  }
  async jugar() {
    //Verificamos que existan elementos en los array
    if (this.Jugadores.length===0) {
      this.final = true;
    } else {
      //Selecionar el jugador
      if(this.cont===this.Jugadores.length){
        this.jugadorActual=this.todos;
      }else{
      this.jugadorActual = this.Jugadores[this.cont];
      }
      this.cont++;

      if (this.cont > this.Jugadores.length) {
        this.cont = 0;
      }
      //Seleciomanos la pregunta en funcion del genero del jugador y la eliminamos del arreglo.

      if (this.jugadorActual.genero === 'Masculino') {
        if (this.PreguntasH.length !== 0) {
          let fin = this.PreguntasH.length-1;
          let pos = await Math.round(Math.random() * (fin - 0) + 0);
          this.PreguntaActual = this.PreguntasH[pos];
          this.PreguntasH = this.PreguntasH.filter(pre =>
            pre.texto !== this.PreguntaActual.texto
          )
          if(this.PreguntasH.length===0){
            this.Jugadores = this.Jugadores.filter(elemento=>{
              elemento.genero==='Masculino';
            })
          }
        }
      } else if (this.jugadorActual.genero === 'Femenino') {
        if (this.PreguntasM.length !== 0) {
          let fin = this.PreguntasM.length-1;
          let pos = await Math.round(Math.random() * (fin - 0) + 0);
          this.PreguntaActual = this.PreguntasM[pos];
          this.PreguntasM = this.PreguntasM.filter(pre =>
            pre.texto !== this.PreguntaActual.texto
          )
          if(this.PreguntasM.length===0){
            this.Jugadores = this.Jugadores.filter(elemento=>{
              elemento.genero==='Femenino';
            })
          }
        } 
      } else if(this.jugadorActual.genero === ''){
        if (this.PreguntasT.length !== 0) {
          let fin = this.PreguntasT.length-1;
          let pos = await Math.round(Math.random() * (fin - 0) + 0);
          this.PreguntaActual = this.PreguntasT[pos];
          this.PreguntasT = this.PreguntasT.filter(pre =>
            pre.texto !== this.PreguntaActual.texto
          )
          if(this.PreguntasT.length===0){
            this.todos.genero='x';
          }
        } 
      }
    }
  }
  async reiniciarJuego(){
    this.final=false;
    this.Jugadores=this.JugadoresAux;
    this.getPreguntas();
    this.jugar();
  }
}

