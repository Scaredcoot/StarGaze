import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import firebase from 'firebase';
import { TodayPage } from '../today/today';


@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  userData = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook) {
  }

  loginWithFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(()=>{
        firebase.auth().getRedirectResult().then((result)=>{
          this.navCtrl.push(TodayPage);
          this.navCtrl.setRoot(TodayPage);
        }).catch(function(error) {
          alert(JSON.stringify(error))
        });
      })
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

}
