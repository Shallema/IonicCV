import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { OpenWeatherProvider } from '../../providers/open-weather/open-weather';

import * as moment from 'moment';

/**
 * Generated class for the DemoApiwheatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo-apiwheather',
  templateUrl: 'demo-apiwheather.html',
})
export class DemoApiwheatherPage {

  lat: any;
  lng: any;

  weatherData: object;

  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                  public geolocation: Geolocation, 
                    public openweatherProvider: OpenWeatherProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoApiwheatherPage');

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.openweatherProvider.forecast(this.lat, this.lng).subscribe((json) => {
        this.weatherData = json;
        console.log(this.weatherData);
      })
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  formateDate(str: string): string {
    let dateMoment = moment(str);
    return dateMoment.format("dddd HH:mm");
  }

}
