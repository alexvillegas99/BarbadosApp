import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Componente } from './interfaces/interfaces';
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
    private iab: InAppBrowser ) {}
  ngOnInit(){
    
    this.componentes= this.dataService.getMenuOpts();
    this.redesSociales= this.dataService.getRedesSociales();
  }
  abrirSosial(link:string){
    const browser = this.iab.create(link,'_system');
  }
}
