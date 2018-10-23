import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the DemoEmailcomposerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo-emailcomposer',
  templateUrl: 'demo-emailcomposer.html',
})
export class DemoEmailcomposerPage {

  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                  public emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoEmailcomposerPage');

    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'sandrine.hallemans@gmail.com',
       subject: 'You are hired !',
       body: 'You are so talented, it is amazing!',
       isHtml: true
     };
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

}
