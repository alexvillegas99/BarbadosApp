import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Componente } from './interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { DataLocalService } from './services/data-local.service';
//

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  componentes:Observable<Componente[]>; 
  redesSociales:Observable<Componente[]>;
  constructor(private dataService:DataService,
    private iab: InAppBrowser,
    private navCtrl:NavController,
     private datalocalService:DataLocalService ) {}
  ngOnInit(){
    
    this.componentes= this.dataService.getMenuOpts();
    this.redesSociales= this.dataService.getRedesSociales();
  }
  abrirSosial(link:string){
    const browser = this.iab.create(link,'_system');
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
