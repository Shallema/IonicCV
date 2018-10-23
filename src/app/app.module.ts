import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SkillsPage } from '../pages/skills/skills';
import { SkillsPageModule } from '../pages/skills/skills.module';
import { StudiesPageModule } from '../pages/studies/studies.module';
import { StudiesPage } from '../pages/studies/studies';
import { ExperiencePage } from '../pages/experience/experience';
import { ExperiencePageModule } from '../pages/experience/experience.module';
import { HobbiesPage } from '../pages/hobbies/hobbies';
import { HobbiesPageModule } from '../pages/hobbies/hobbies.module';
import { AboutmePage } from '../pages/aboutme/aboutme';
import { AboutmePageModule } from '../pages/aboutme/aboutme.module';
import { OtherPage } from '../pages/other/other';
import { OtherPageModule } from '../pages/other/other.module';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { DemoPage } from '../pages/demo/demo';
import { DemoApiwheatherPage } from '../pages/demo-apiwheather/demo-apiwheather';
import { DemoGeolocPage } from '../pages/demo-geoloc/demo-geoloc';
import { DemoSafarivcPage } from '../pages/demo-safarivc/demo-safarivc'
import { DemoEmailcomposerPage } from '../pages/demo-emailcomposer/demo-emailcomposer';
import { DemoApirailPage } from '../pages/demo-apirail/demo-apirail';
import { StationListresultPage } from '../pages/station-listresult/station-listresult';

import { Geolocation } from '@ionic-native/geolocation';
import { OpenWeatherProvider } from '../providers/open-weather/open-weather';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { EmailComposer } from '@ionic-native/email-composer';
import { IrailProvider } from '../providers/irail/irail';
import { FileOpener } from '@ionic-native/file-opener';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    DemoPage,
    DemoApiwheatherPage,
    DemoGeolocPage,
    DemoSafarivcPage,
    DemoEmailcomposerPage,
    DemoApirailPage,
    StationListresultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SkillsPageModule, 
    StudiesPageModule, 
    ExperiencePageModule,
    HobbiesPageModule,
    AboutmePageModule,
    OtherPageModule,
    HttpClientModule,
    PdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SkillsPage,
    StudiesPage,
    ExperiencePage,
    HobbiesPage,
    AboutmePage,
    OtherPage,
    TabsPage,
    AboutPage,
    DemoPage,
    DemoApiwheatherPage,
    DemoGeolocPage,
    DemoSafarivcPage,
    DemoEmailcomposerPage,
    DemoApirailPage,
    StationListresultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    OpenWeatherProvider,
    HttpClient,
    SafariViewController,
    EmailComposer,
    IrailProvider,
    FileOpener,
    DocumentViewer,
    SocialSharing
  ]
})
export class AppModule {}
