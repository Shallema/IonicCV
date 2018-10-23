import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoEmailcomposerPage } from './demo-emailcomposer';

@NgModule({
  declarations: [
    DemoEmailcomposerPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoEmailcomposerPage),
  ],
})
export class DemoEmailcomposerPageModule {}
