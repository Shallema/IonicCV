import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IrailProvider } from '../../providers/irail/irail'

import * as moment from 'moment'

/**
 * Generated class for the StationListresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-station-listresult',
  templateUrl: 'station-listresult.html',
})
export class StationListresultPage {

 stationId: string;

 departures = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private irailProvider: IrailProvider) {
    this.stationId = this.navParams.get('station_id')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StationListresultPage');

    this.irailProvider.liveboardForStation(this.stationId).subscribe((json) => {
      this.departures = json['departures']['departure']
    });
  }


  formateDate(value: number): string {
    let dateMoment = moment.unix(value);
    return dateMoment.format("dddd HH:mm");
  }

}
