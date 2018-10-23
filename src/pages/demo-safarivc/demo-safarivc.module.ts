import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoSafarivcPage } from './demo-safarivc';

@NgModule({
  declarations: [
    DemoSafarivcPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoSafarivcPage),
  ],
})
export class DemoSafarivcPageModule {}
