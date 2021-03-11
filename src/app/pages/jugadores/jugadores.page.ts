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
    const alert = await this.alertCtrl.create({
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
    }else{
      const alert = await this.alertCtrl.create({
        cssClass:'ion-alert',
        header: 'Información',
        message: 'Ingrese un nick y seleccione su género',
        buttons: [
        {text:'Aceptar', role:'cancel'}]
      });
  
      await alert.present();
    }
    
  }

 async cargarPartida(){

    if(this.jugadores.length>1){
      this.dataLocalService.setJugadores(this.jugadores);
      this.navCtrl.navigateForward(`/niveles`);
  }else{
    const alert = await this.alertCtrl.create({
      cssClass:'ion-alert',
      header: 'Información',
      message: 'Minimo 2 jugadores',
      buttons: [
      {text:'Aceptar', role:'cancel'}]
    });

    await alert.present();
  }
  
  }
}
