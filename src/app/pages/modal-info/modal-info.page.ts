import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  constructor(private modalCtrl:ModalController) { }
  imagen='/assets/img/informacion.png';
  @Input() informacion:string;
  ocultarSlider=false;
  ngOnInit() {
    setTimeout(() => {
      this.ocultarSlider = true;
    }, 500);
  }
  cerrar(){
    this.modalCtrl.dismiss();
      }
}


