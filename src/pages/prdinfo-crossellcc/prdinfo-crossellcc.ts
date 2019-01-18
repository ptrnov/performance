import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProductPage } from '../../pages/app-product/app-product';


@IonicPage()
@Component({
  selector: 'page-prdinfo-crossellcc',
  templateUrl: 'prdinfo-crossellcc.html',
})
export class PrdinfoCrossellccPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdinfoCrossellccPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppProductPage);
  }
}
