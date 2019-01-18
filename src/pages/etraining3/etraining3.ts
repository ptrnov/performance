import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Etraining4Page } from '../../pages/etraining4/etraining4';

@IonicPage()
@Component({
  selector: 'page-etraining3',
  templateUrl: 'etraining3.html',
})
export class Etraining3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Etraining3Page');
  }

  next(){
    this.navCtrl.setRoot(Etraining4Page);
  }
}
