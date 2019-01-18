import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Etraining3Page } from '../../pages/etraining3/etraining3';

@IonicPage()
@Component({
  selector: 'page-etraining2',
  templateUrl: 'etraining2.html',
})
export class Etraining2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Etraining2Page');
  }

  next(){
    this.navCtrl.setRoot(Etraining3Page);
  }
}
