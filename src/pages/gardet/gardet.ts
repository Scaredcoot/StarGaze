import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForecastProvider} from '../../providers/forecast/forecast';


@IonicPage()
@Component({
  selector: 'page-gardet',
  templateUrl: 'gardet.html',
})
export class GardetPage {
forecast: any;
location: {location:string};


  constructor(public navCtrl: NavController, public navParams: NavParams, private forecastProvider: ForecastProvider) {
  }
  ionViewWillEnter(){
    this.location = {location:'gardet'}
    
    this.forecastProvider.getForecast(this.location.location)
    .subscribe(forecast => 
      {console.log(forecast);
  
  });
  }
  }
 
  
