import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoApiwheatherPage } from './demo-apiwheather';

@NgModule({
  declarations: [
    DemoApiwheatherPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoApiwheatherPage),
  ],
})
export class DemoApiwheatherPageModule {}
