import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private navCtrl: NavController) {}

  slideOpts={
    allowSlidePrev:false,
    allowSlideNext:false
  }
  ngOnInit() {
    setTimeout(() => {
      
      this.navCtrl.navigateRoot('/inicio');
          }, 4500);
  }

}
