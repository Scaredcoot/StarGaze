/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Injectable()
export class ForecastProvider {
url;

  constructor(public http: HttpClient) {
    console.log('Hello ForecastProvider Provider');
    this.url = 'https://pvt.dsv.su.se/Group04/place';
  }
  getForecast(location) {
    
    return this.http.get(this.url+'/'+location+'/today')
    
   
  }
}*/
import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'

import 'rxjs/add/operator/do'

import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable'


@Injectable()

export class ForecastProvider {




  private url: string = "https://pvt.dsv.su.se/Group04/place";
 //private url: string = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json";

  constructor(private http: Http) {

    console.log('Hello MessageserviceProvider Provider');

  }



  getForecast(location) {

    return this.http.get(this.url+'/'+location+'/today')
   //return this.http.get(this.url)

    .do(this.logResponse)

    .map(this.extractData)

    .do(this.logResponse)

    .catch(this.catchError)

  }
 


  private catchError(error: Response | any) {

    console.log(error);

    return Observable.throw(error.json().error || "Server error.");

  }



  private logResponse(res: Response) {

    console.log(res);

  }



  private extractData(res: Response) {

    return res.json();
   
  }



}
