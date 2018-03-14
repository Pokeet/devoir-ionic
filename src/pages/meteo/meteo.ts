import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeteoProvider } from '../../providers/meteo/meteo';

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {

  ville : string = "Ville Par defaut"

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public meteoProvider: MeteoProvider
  ) {
    this.meteoProvider.getMeteo()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }

}
