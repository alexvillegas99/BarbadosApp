import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { NavController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  slideOpts={
    allowSlidePrev:false,
    allowSlideNext:false
  }
  constructor( private dataService:DataService,
               private navCtrl:NavController,
                private datalocalService:DataLocalService) { }
  imgActual = "/assets/b1.jpg";
  indice =0;
  componentes:Componente[]= [];
  ngOnInit() {
      this.dataService.getMenuOpts()
      .subscribe(resp =>{
        this.componentes= resp;
      })
   // var tiempo = 5000;
   // this.componentes= this.dataService.getMenuOpts();
   /*  setInterval( function(){
     var arrImagenes = [ '/assets/b1.jpg','/assets/b2.jpg', '/assets/b3.jpg'];
      this.imgActual = arrImagenes[this.indice];
      this.indice++;
      if (this.indice==3) { this.indice = 0; };
      console.log(this.imgActual);
     
    }, tiempo) */
  }
  CambiarVentana(tipo:string){
    this.datalocalService.setTipo(tipo);
    if(tipo==='Verdad o Desafío'){
      this.navCtrl.navigateForward(`/niveles`);
    }else{
      this.navCtrl.navigateForward(`/piramide`);
    }
   
  }
}
