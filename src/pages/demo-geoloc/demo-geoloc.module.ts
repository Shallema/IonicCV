import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoGeolocPage } from './demo-geoloc';

@NgModule({
  declarations: [
    DemoGeolocPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoGeolocPage),
  ],
})
export class DemoGeolocPageModule {}
