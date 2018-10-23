import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  pdfSrc: string = 'assets/cv.pdf';

  constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                  private fileOpener: FileOpener,
                    private document: DocumentViewer,
                      private socialSharing: SocialSharing) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');

    // const options: DocumentViewerOptions = {
    //   title: 'My CV'
    // }
    
    // this.document.viewDocument('assets/cv.pdf', 'application/pdf', options)

  }

  share() {
    this.socialSharing.share(null, "Get my CV", 'assets/cv.pdf', null).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}
