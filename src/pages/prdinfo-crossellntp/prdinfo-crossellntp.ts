import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProductPage } from '../../pages/app-product/app-product';

@IonicPage()
@Component({
  selector: 'page-prdinfo-crossellntp',
  templateUrl: 'prdinfo-crossellntp.html',
})
export class PrdinfoCrossellntpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdinfoCrossellntpPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppProductPage);
  }
}
