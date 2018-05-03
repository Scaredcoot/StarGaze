import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GardetPage} from '../gardet/gardet';
import { NackaPage} from '../nacka/nacka';
import { JarvaPage} from '../jarva/jarva';
import { GrimstaPage} from '../grimsta/grimsta';
import { TyrestaPage} from '../tyresta/tyresta';


@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class TodayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  GardetPlaces(){
    this.navCtrl.push(GardetPage);
    }
    JarvaPlaces(){
      this.navCtrl.push(JarvaPage);
      }
      NackaPlaces(){
        this.navCtrl.push(NackaPage);
        }
        TyrestaPlaces(){
          this.navCtrl.push(TyrestaPage);
          }
          GrimstaPlaces(){
            this.navCtrl.push(GrimstaPage);
            }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayPage');
  }

}
