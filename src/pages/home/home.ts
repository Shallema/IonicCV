import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SkillsPage } from '../skills/skills';
import { StudiesPage } from '../studies/studies';
import { ExperiencePage } from '../experience/experience';
import { HobbiesPage } from '../hobbies/hobbies';
import { AboutmePage } from '../aboutme/aboutme';
import { OtherPage } from '../other/other';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
                private socialSharing: SocialSharing) {
  }

  display(item: String){
    console.log('display ' + item)
    if (item == 'skills'){
      this.navCtrl.push(SkillsPage);
    } else if (item == 'studies'){
      this.navCtrl.push(StudiesPage);
    } else if (item == 'experience'){
      this.navCtrl.push(ExperiencePage);
    } else if (item == 'hobbies'){
      this.navCtrl.push(HobbiesPage);
    } else if (item == 'aboutme'){
      this.navCtrl.push(AboutmePage);
    } else if (item == 'other'){
      this.navCtrl.push(OtherPage);
    }
  }

  share() {
    this.socialSharing.share(null, "My CV", "assets/cv.pdf", null).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}

