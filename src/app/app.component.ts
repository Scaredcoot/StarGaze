import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular'

import { TodayPage } from '../pages/today/today';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { initializeApp } from 'firebase';
import { LogInPage } from '../pages/log-in/log-in';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LogInPage;
  activePage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuController: MenuController) {
    this.initializeApp();


  this.pages = [ 
  { title: 'Forecast', component: TodayPage},
  { title: 'About the app', component: AboutPage},
  { title: 'Settings', component: SettingsPage}
  ];
    this.activePage = this.pages[0];

  

  } 
initializeApp(){
  this.platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  });
}
openPage(page) {
  this.nav.setRoot(page.component);
  this.activePage= page;
  }
checkActive(page){
  return page == this.activePage;
}
logOut(){
  this.nav.push(LogInPage);
  this.nav.setRoot(LogInPage);
  this.menuController.close();
}

}