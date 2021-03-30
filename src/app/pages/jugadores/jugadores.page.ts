import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLocalService } from '../../services/data-local.service';
import { NavController } from '@ionic/angular';
import { Jugadores } from '../../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {
  nombrejugador="";
  jugadores: Jugadores[] = [];
  textoCondicion="Minimo 2 jugadores";
  genero='';
 imgHombre="/assets/img/triton.png";
 imgMujer="/assets/img/sirena.png";
 mensaje='';
  constructor(
              private dataLocalService:DataLocalService,
              private navCtrl:NavController,
              private alertCtrl:AlertController) { }

  ngOnInit() {
   // console.log(this.tipo);
    this.jugadores=[];
    this.dataLocalService.setJugadores(this.jugadores);
  }
  async eliminarJugador(item:string) {
        this.jugadores = this.jugadores.filter(jugador =>jugador.nombre!==item)
     
  }
  cambiarGenero(genero:string){
    if(genero=='Masculino'){
      this.imgHombre="/assets/img/triton-s.png";
      this.imgMujer="/assets/img/sirena.png";
    }else{
      this.imgHombre="/assets/img/triton.png";
      this.imgMujer="/assets/img/sirena-s.png";
    }
      this.genero = genero;
  }
 async agregarJugador(){
   
    if(this.nombrejugador!=='' && this.genero!==''){
      let jugador:Jugadores = {
        nombre:this.nombrejugador,
        genero:this.genero
      };
      this.jugadores.push(jugador);
      console.log(this.jugadores)
      this.nombrejugador = "";
      this.genero="";
      this.imgHombre="/assets/img/triton.png";
 this.imgMujer="/assets/img/sirena.png";
 this.mensaje='';
    }else{
     this.mensaje= 'Ingrese un nick y seleccione su género'
     
    }
    
  }

 async cargarPartida(){

    if(this.jugadores.length>1){
      this.dataLocalService.setJugadores(this.jugadores);
      this.navCtrl.navigateForward(`/traguito-caliente`);
      this.mensaje='';
  }else{
   this.mensaje= 'Minimo 2 jugadores';

  }
  
  }
}
