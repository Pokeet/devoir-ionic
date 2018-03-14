//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MeteoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoProvider {

  days: Array<any>

  constructor(
    //public http: HttpClient
  ) {
    console.log('Hello MeteoProvider Provider');
  }

  getMeteo() {
    this.days = [
      {
        day: "Lundi",
        max: 0,
        min: -5,
        weather: "Super soleil"
      },
      {
        day: "Mardi",
        max: 1,
        min: -4,
        weather: "Pluie"
      },
      {
        day: "Mercredi",
        max: 3,
        min: -3,
        weather: "Couvert"
      },
      {
        day: "Jeudi",
        max: 0,
        min: -5,
        weather: "Super soleil"
      },
      {
        day: "Vendredi",
        max: 1,
        min: -4,
        weather: "Pluie"
      },
      {
        day: "Samedi",
        max: 10,
        min: -30,
        weather: "Tempete de neige"
      },
      {
        day: "Dimanche",
        max: 10,
        min: -30,
        weather: "Tornade de requin"
      }
    ]
  }

}
