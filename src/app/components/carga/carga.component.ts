import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss'],
})
export class CargaComponent implements OnInit {
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  }
  constructor() { }

  ngOnInit() {}

}
