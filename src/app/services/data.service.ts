import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, Nivel, VerdadOReto, Piramide, traguito, circulo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getMenuOpts(){
   return this.http.get<Componente[]>('../assets/data/menu-opts.json');
  }
  getRedesSociales(){
    return this.http.get<Componente[]>('../assets/data/social-opts.json');
   }
   getNiveles(){
    return this.http.get<Nivel[]>('../assets/data/niveles.json');
  }
  getVR(){
    return  this.http.get<VerdadOReto[]>('../assets/data/VR-opts.json');
  }
  getPiramide(){
    return  this.http.get<Piramide[]>('../assets/data/piramide.json');
  }
  getTraguito(){
    return this.http.get<traguito[]>('../assets/data/traguito-caliente.json');
  }
  getCirculo(){
    return this.http.get<circulo[]>('../assets/data/circulo.json');
  }
}
