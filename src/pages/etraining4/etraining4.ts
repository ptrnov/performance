import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Etraining4MessagePage } from '../../pages/etraining4-message/etraining4-message';

@IonicPage()
@Component({
  selector: 'page-etraining4',
  templateUrl: 'etraining4.html',
})
export class Etraining4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Etraining4Page');
  }

  next() {
    this.navCtrl.setRoot(Etraining4MessagePage);
  }

}
