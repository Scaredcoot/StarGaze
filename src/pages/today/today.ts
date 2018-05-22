import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GardetPage} from '../gardet/gardet';
import { NackaPage} from '../nacka/nacka';
import { JarvaPage} from '../jarva/jarva';
import { GrimstaPage} from '../grimsta/grimsta';
import { TyrestaPage} from '../tyresta/tyresta';
import { ContactPage } from '../contact/contact';


import { PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class TodayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public popoverCtrl: PopoverController) {
    
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
 /* presentPopover(myEvent){
    let popover = this.popoverCtrl.create(ContactPage);
    popover.present({
      ev: myEvent
    });
  }*/
  ContactPage(){
    this.navCtrl.push(ContactPage);
  }
}
