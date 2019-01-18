import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Etraining2Page } from '../../pages/etraining2/etraining2';
import { from } from 'rxjs/observable/from';

@IonicPage()
@Component({
  selector: 'page-etraining1',
  templateUrl: 'etraining1.html',
})
export class Etraining1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Etraining1Page');
  }

  next(){
    this.navCtrl.setRoot(Etraining2Page);
  }
}
