import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { NavController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
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
  }
  CambiarVentana(tipo:string){
    this.datalocalService.setTipo(tipo);
    if(tipo==='Verdad o Desafío'){
      this.navCtrl.navigateForward(`/niveles`);
    }else if(tipo==='Piramide'){
      this.navCtrl.navigateForward(`/piramide`);
    }else if(tipo==='Traguito Caliente'){
      this.navCtrl.navigateForward(`/jugadores`);
    }else if(tipo==='Circulo'){
      this.navCtrl.navigateForward(`/circulo`);
    }
   
  }
}
