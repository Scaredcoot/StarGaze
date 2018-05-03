import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesPage } from '../places/places';

/**
 * Generated class for the TodayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class TodayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  GardetPlaces(){
    this.navCtrl.push(PlacesPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayPage');
  }

}
