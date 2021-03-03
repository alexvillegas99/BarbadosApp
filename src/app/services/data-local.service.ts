import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Jugadores } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  constructor(private storage: Storage) { }
  jugadores:Jugadores[]=[];
  //setters
  setJugadores(jugadores: Jugadores[]){
    this.storage.set('jugadores',jugadores);
    this.jugadores = jugadores;
  }
  setNiveles(niveles){
    this.storage.set('niveles',niveles);
    console.log(niveles);
  }
  setTipo(tipo){
    this.storage.set('tipo',tipo);
    console.log(tipo);
  }
 //getters

async getJugadores(){

  const tem = await this.storage.get('jugadores');
  if(tem){
    this.jugadores = tem;
  }
}
async getNiveles(){
  return this.storage.get('niveles');
}
async getTipo(){
  return this.storage.get('tipo');
}
}
