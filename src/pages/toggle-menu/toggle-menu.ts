import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-toggle-menu',
  templateUrl: 'toggle-menu.html',
})
export class ToggleMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
openAboutPage(){
  this.navCtrl.push(AboutPage);

}
  
openSettingPage(){
  this.navCtrl.push(SettingsPage);

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToggleMenuPage');
  }

}