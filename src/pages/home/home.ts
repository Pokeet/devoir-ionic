import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeteoProvider } from '../../providers/meteo/meteo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ville : string

  constructor(
    public navCtrl: NavController,
    meteo: MeteoProvider,
  ) {

  }

  gotoMeteo () {
    this.navCtrl.push('MeteoPage')
  }

}
