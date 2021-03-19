import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { HomePageModule } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private navCtrl: NavController,
                private modalCtrl:ModalController) {}

  slideOpts={
    allowSlidePrev:false,
    allowSlideNext:false
  }
  ngOnInit() {
    setTimeout(() => {
      
      this.navCtrl.navigateForward('/inicio');
          }, 5500);
  }

}
