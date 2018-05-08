import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import firebase from 'firebase';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LogInPage } from '../pages/log-in/log-in';
import { TodayPage } from '../pages/today/today';
import { MenuPage } from '../pages/menu/menu';
import { GardetPage} from '../pages/gardet/gardet';
import { JarvaPage} from '../pages/jarva/jarva';
import { NackaPage} from '../pages/nacka/nacka';
import { GrimstaPage} from '../pages/grimsta/grimsta';
import { TyrestaPage} from '../pages/tyresta/tyresta';
import { SettingsPage } from '../pages/settings/settings';

import { Facebook } from '@ionic-native/facebook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig={
  apiKey: "AIzaSyBtzmdRYHLeBrLt8MGdti9G0A1kXIV_xg4",
  authDomain: "stargaze-177ce.firebaseapp.com",
  databaseURL: "https://stargaze-177ce.firebaseio.com",
  projectId: "stargaze-177ce",
  storageBucket: "stargaze-177ce.appspot.com",
  messagingSenderId: "931550022499"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LogInPage,
    TodayPage,
    MenuPage,
    GardetPage,
    NackaPage,
    JarvaPage,
    TyrestaPage,
    GrimstaPage,
    SettingsPage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LogInPage,
    TodayPage,
    MenuPage,
    GardetPage,
    NackaPage,
    JarvaPage,
    TyrestaPage,
    GrimstaPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
