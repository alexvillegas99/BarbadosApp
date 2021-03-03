import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  slideOpts={
    allowSlidePrev:false,
    allowSlideNext:false
  }
  constructor( private navCtrl: NavController) {}
  ngOnInit(){
  setTimeout(() => {
this.navCtrl.navigateForward('/inicio');
    }, 3000);
    
  }

}
