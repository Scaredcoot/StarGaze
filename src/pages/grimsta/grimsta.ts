import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForecastProvider} from '../../providers/forecast/forecast';

/**
 * Generated class for the GrimstaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grimsta',
  templateUrl: 'grimsta.html',
})
export class GrimstaPage {
  forecast: any;
  location: {location:string};

  constructor(public navCtrl: NavController, public navParams: NavParams, private forecastProvider: ForecastProvider) {
  }
  ionViewWillEnter(){
    this.location = {location:'grimsta'}
    
    this.forecastProvider.getForecast(this.location.location)
    .subscribe(forecast => 
      {console.log(forecast);
  
  });
  }

  

}
