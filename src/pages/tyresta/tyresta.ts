import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForecastProvider} from '../../providers/forecast/forecast';

@IonicPage()
@Component({
  selector: 'page-tyresta',
  templateUrl: 'tyresta.html',
})
export class TyrestaPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private forecastProvider: ForecastProvider) {
  }
  ionViewWillEnter(){
    this.location = {location:'tyrestanationalpark'}
    
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
        console.log(forecast);
  
  });
  }
}
