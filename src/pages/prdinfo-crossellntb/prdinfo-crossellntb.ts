import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProductPage } from '../../pages/app-product/app-product';

@IonicPage()
@Component({
  selector: 'page-prdinfo-crossellntb',
  templateUrl: 'prdinfo-crossellntb.html',
})
export class PrdinfoCrossellntbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdinfoCrossellntbPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppProductPage);
  }

}
