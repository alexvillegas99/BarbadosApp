import { Component, OnInit } from '@angular/core';
import { Nivel, VerdadOReto, Pregunta, Preguntas, Jugadores } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-verdad-oreto',
  templateUrl: './verdad-oreto.page.html',
  styleUrls: ['./verdad-oreto.page.scss'],
})
export class VerdadORetoPage implements OnInit {

  constructor(private dataService: DataService,
    private dataLocalService: DataLocalService) { }
  ocultarSlider = true;
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  }
  preguntas: Pregunta[] = [];
  preguntasActivas: VerdadOReto[] = [];
  preguntaMostrar:Pregunta;
  niveles: Nivel[];
  jugadores:Jugadores[]=[];
  jugadorActual="";
  cont:number=0;
  tipoImagen="/assets/icon/icon.png";
  tipo="";
  ngOnInit() {
    this.dataLocalService.getJugadores();
    this.jugadores = this.dataLocalService.jugadores;
    this.cargarPreguntas();
    setTimeout(() => {
      this.ocultarSlider = false;
    }, 5000);

  }
  async Jugar(){
    if(this.preguntas.length>0){
    //Cambair de jugador
    this.jugadorActual = this.jugadores[this.cont].nombre;
    console.log(this.jugadorActual)
    this.cont++;
    
    if(this.cont>this.jugadores.length-1){
      this.cont=0;
    }

    //Cambiar de pregunta  y quitar del arreglo
    let fin = this.preguntas.length;
    let pos = await Math.round(Math.random() * (fin - 0) + 0);
    this.preguntaMostrar= this.preguntas[pos];
    this.preguntas = this.preguntas.filter(pre =>
      pre.id !== this.preguntaMostrar.id
    )
    //Cambiar icono
    if(this.preguntaMostrar.id.substring(0,1) == 'v'){
      this.tipoImagen = "/assets/verdad.png";
      this.tipo="Verdad";
    }else{
      this.tipoImagen = "/assets/reto.png"
      this.tipo="Reto";
    }
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
            pregunta.preguntas.forEach(fin=>{
              this.preguntas.push(fin);
             
            })
            
          }

        })
      })

    })
    this.Jugar();
  }

}
