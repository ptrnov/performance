import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Etraining1Page } from '../../pages/etraining1/etraining1';

@IonicPage()
@Component({
  selector: 'page-signup-message',
  templateUrl: 'signup-message.html',
})
export class SignupMessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupMessagePage');
  }

  public next(){
    // this.navCtrl.push(LoanDatatambahanEvidancePage);
    this.navCtrl.setRoot(Etraining1Page);
  }

}
