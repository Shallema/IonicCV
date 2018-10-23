import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DemoGeolocPage } from '../demo-geoloc/demo-geoloc';
import { DemoApiwheatherPage } from '../demo-apiwheather/demo-apiwheather';
import { DemoSafarivcPage } from '../demo-safarivc/demo-safarivc';
import { DemoEmailcomposerPage } from '../demo-emailcomposer/demo-emailcomposer';
import { DemoApirailPage } from '../demo-apirail/demo-apirail';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {

  constructor(public navCtrl: NavController, 
                public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');

  }

  displayDemoGeoloc() {
    this.navCtrl.push(DemoGeolocPage);
  }

  displayDemoApiWeather() {
    this.navCtrl.push(DemoApiwheatherPage);
  }

  displayDemoApiRail() {
    this.navCtrl.push(DemoApirailPage);
  }

  displayDemoSafariVC() {
    this.navCtrl.push(DemoSafarivcPage);
  }

  displayEmailComposer() {
    this.navCtrl.push(DemoEmailcomposerPage);
  }

}
