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
  imgHombre='/assets/img/pirata.png';
  imgMujer='/assets/img/sirena.png';
  textoCondicion="Minimo 2 jugadores";
  condicion=false;
  genero='';
 
  constructor(private route: ActivatedRoute,
              private dataLocalService:DataLocalService,
              private navCtrl:NavController,
              private alertCtrl:AlertController) { }

  ngOnInit() {
   // console.log(this.tipo);
    this.jugadores=[];
    this.dataLocalService.setJugadores(this.jugadores);
  }
  async eliminarJugador(item:string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'background: var(--ion-color-mycolor2)',
      header: 'Advertencia',
      message: 'Eliminar Jugador?',
      buttons: [{text:'Eliminar',handler:()=>{
        this.jugadores = this.jugadores.filter(jugador =>jugador.nombre!==item)
      }},
      {text:'Cancelar', role:'cancel',cssClass:'rojo'}]
    });

    await alert.present();
  }
  cambiarGenero(genero:string){
      this.genero = genero;
  }
  agregarJugador(){
   
    if(this.nombrejugador!=='' && this.genero!==''){
      let jugador:Jugadores = {
        nombre:this.nombrejugador,
        genero:this.genero
      };
      this.jugadores.push(jugador);
      console.log(this.jugadores)
      this.nombrejugador = "";
      this.genero="";
      this.condicion=false;
    }
    
  }

  cargarPartida(){

    if(this.jugadores.length>1){
      this.dataLocalService.setJugadores(this.jugadores);
      this.navCtrl.navigateForward(`/niveles`);
  }else{
    this.condicion=true;
  }
  
  }
}
