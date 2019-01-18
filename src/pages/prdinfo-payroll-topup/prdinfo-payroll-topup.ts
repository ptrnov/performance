import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProductPage } from '../../pages/app-product/app-product';


@IonicPage()
@Component({
  selector: 'page-prdinfo-payroll-topup',
  templateUrl: 'prdinfo-payroll-topup.html',
})
export class PrdinfoPayrollTopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdinfoPayrollTopupPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppProductPage);
  }
}
