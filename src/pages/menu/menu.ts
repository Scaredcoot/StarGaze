import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
openAboutPage(){
  this.navCtrl.push(AboutPage);

}
  
openSettingPage(){
  this.navCtrl.push(SettingsPage);

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
