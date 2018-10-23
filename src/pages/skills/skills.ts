import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {


  skills = []
  appskills = []
  webskills = []
  dbskills = []
  lawskills = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');

    this.skills = [
      { title: 'Java Android', strength: 5, icon: "logo-android" },
      { title: 'Swift', strength: 5, icon: "logo-apple" },
      { title: 'Angular', strength: 1, icon: "logo-angular" },
      { title: 'Ionic', strength: 2, icon: "ionic" },
      { title: 'JavaScript', strength: 2, icon: "logo-javascript" },
      { title: 'HTML', strength: 3, icon: "logo-html5" },
      { title: 'CSS', strength: 2, icon: "logo-css3" },
    ];

    this.appskills = [
      { title: 'Java Android', strength: 5, icon: "logo-android" },
      { title: 'Swift', strength: 5, icon: "logo-apple" },
      { title: 'Angular', strength: 1, icon: "logo-angular" },
      { title: 'Ionic', strength: 2, icon: "ionic" }
    ]

    this.webskills = [
      { title: 'JavaScript', strength: 2, icon: "logo-javascript" },
      { title: 'HTML', strength: 3, icon: "logo-html5" },
      { title: 'CSS', strength: 2, icon: "logo-css3" }
    ]

    this.dbskills = [
      { title: 'SQLite', strength: 4, icon: "archive" },
      { title: 'Firebase', strength: 3, icon: "logo-google" }
    ]

    this.lawskills = [
      { title: 'Internet Copyright Law', icon: "" },
      { title: 'Open Source & Creative Commons', icon: "logo-tux" },
      { title: '3D Printing' },
      { title: 'Privacy Law' }
    ]


  }

}
