import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IrailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IrailProvider {

  private url: string = "https://api.irail.be";

  constructor(public http: HttpClient) {
    console.log('Hello IrailProvider Provider');
  }

  listAllStations() {
    ///stations/?format=json&lang=en
    var params = {'format': 'json'};
    var requestOptions = {
      params: new HttpParams()
    };

    for (let k in params) {
      requestOptions.params = requestOptions.params.set(k, params[k]);
    }

    return this.http.get(this.url + '/stations/', requestOptions);
  }

  liveboardForStation(stationId: string) {

    var params = {'id': stationId, 'arrdep':'departure', 'format': 'json'};
    var requestOptions = {
      params: new HttpParams()
    };

    for (let k in params) {
      requestOptions.params = requestOptions.params.set(k, params[k]);
    }

    return this.http.get(this.url + '/liveboard/', requestOptions);
  }

  

}
