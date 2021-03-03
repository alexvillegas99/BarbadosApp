import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nivel } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { DataLocalService } from '../../services/data-local.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.page.html',
  styleUrls: ['./niveles.page.scss'],
})
export class NivelesPage implements OnInit {
  nivelesSeleccionados:Nivel[] =[]; 
  constructor(private route: ActivatedRoute,
              private navCtrl:NavController,
              private dataService:DataService,
              private dataLocalService: DataLocalService) { }
niveles:Nivel[];
txtMostrar="";
  ngOnInit() {
    this.dataService.getNiveles()
      .subscribe(resp =>{
        this.niveles= resp;
      })
  }
  
  async cargarPartida(){
    let tipo = await this.dataLocalService.getTipo();
    this.nivelesSeleccionados = this.niveles.filter( nivel =>  nivel.selected ==true);
    if(this.nivelesSeleccionados.length>0){
    this.dataLocalService.setNiveles(this.nivelesSeleccionados);
    if(tipo === 'Verdad o Desafío'){
      this.navCtrl.navigateForward(`/verdad-oreto`);
    }
  }else{
    this.txtMostrar="Seleccione niveles"
  }
  }
}
