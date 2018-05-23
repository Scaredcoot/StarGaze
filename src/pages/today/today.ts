import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GardetPage} from '../gardet/gardet';
import { NackaPage} from '../nacka/nacka';
import { JarvaPage} from '../jarva/jarva';
import { GrimstaPage} from '../grimsta/grimsta';
import { TyrestaPage} from '../tyresta/tyresta';
import { ContactPage } from '../contact/contact';
import { ForecastProvider} from '../../providers/forecast/forecast';

import { PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class TodayPage {
  forecast: any;
  day2: any;
  day3: any;
  day4: any;
  day5: any;
  day6: any;
  temp: any;
  rainfall: any;
  cloud: any;
  grade: any; 
  
  location: {location:string};


  constructor(public navCtrl: NavController, public navParams: NavParams,  public popoverCtrl: PopoverController, private forecastProvider: ForecastProvider) {
    
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
    this.location = {location:'gardet'}
    
    this.forecastProvider.getForecast(this.location.location)
    .subscribe(forecast => 
      {
      this.temp = forecast.days.day1.temp;
        this.cloud = forecast.days.day1.cloudiness;
        this.rainfall = forecast.days.day1.rainfall;
        this.grade = forecast.days.day1.grade;
        this.day2 = forecast.days.day2;
        this.day3 = forecast.days.day3;
        this.day4 = forecast.days.day4;
        this.day5 = forecast.days.day5;
        this.day6 = forecast.days.day6;

    console.log('ionViewDidLoad TodayPage');
    });
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
