import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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

import { Facebook } from '@ionic-native/facebook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    GrimstaPage
 
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
    GrimstaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
