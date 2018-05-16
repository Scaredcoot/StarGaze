import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForecastProvider} from '../../providers/forecast/forecast';


@IonicPage()
@Component({
  selector: 'page-nacka',
  templateUrl: 'nacka.html',
})
export class NackaPage {
  forecast: any;
  location: {location:string};
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private forecastProvider: ForecastProvider) {
  }

  ionViewWillEnter(){
    this.location = {location:'nackareservatet'}
    
    this.forecastProvider.getForecast(this.location.location)
    .subscribe(forecast => 
      {console.log(forecast);
  
  });
  }
}
