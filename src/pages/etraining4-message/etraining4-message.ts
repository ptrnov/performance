import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';


@IonicPage()
@Component({
  selector: 'page-etraining4-message',
  templateUrl: 'etraining4-message.html',
})
export class Etraining4MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Etraining4MessagePage');
  }

  login() {
    this.navCtrl.setRoot(LoginPage);
  }

}
