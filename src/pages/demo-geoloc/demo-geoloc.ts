import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'

/**
 * Generated class for the DemoGeolocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo-geoloc',
  templateUrl: 'demo-geoloc.html',
})
export class DemoGeolocPage {

  lat: any;
  lng: any;

  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                  public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoGeolocPage');

    //--- Geoloc en dur ---
    /*this.openweatherProvider.forecast(40.7109945, -74.004355).subscribe((json) => {
      this.weatherData = json;
      console.log(this.weatherData);
    });*/

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }) .catch((error) => {
    console.log('Error getting location', error);
    });

  }

}
