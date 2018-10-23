import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IrailProvider } from '../../providers/irail/irail';
import { StationListresultPage } from '../station-listresult/station-listresult';

/**
 * Generated class for the DemoApirailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo-apirail',
  templateUrl: 'demo-apirail.html',
})
export class DemoApirailPage {

  stations = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public irailProvider: IrailProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoApirailPage');
    this.irailProvider.listAllStations().subscribe((json) => {
      this.stations = json['station'];
    });
  }

  displayLiveboard(stationId: string){
    this.navCtrl.push(StationListresultPage, {'station_id': stationId})
  }
}
