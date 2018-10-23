import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafariViewController } from '@ionic-native/safari-view-controller';

/**
 * Generated class for the DemoSafarivcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo-safarivc',
  templateUrl: 'demo-safarivc.html',
})
export class DemoSafarivcPage {

  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                  public safariViewController: SafariViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoSafarivcPage');

    this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {

        this.safariViewController.show({
          url: 'https://www.linkedin.com/in/sandrine-hallemans/',
          hidden: false,
          animated: false,
          transition: 'curl',
          enterReaderModeIfAvailable: true,
          tintColor: '#ff0000'
        })
        .subscribe((result: any) => {
            if(result.event === 'opened') console.log('Opened');
            else if(result.event === 'loaded') console.log('Loaded');
            else if(result.event === 'closed') console.log('Closed');
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    }
  );
  }

}
