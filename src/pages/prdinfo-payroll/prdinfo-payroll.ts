import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProductPage } from '../../pages/app-product/app-product';
import { from } from 'rxjs/observable/from';

@IonicPage()
@Component({
  selector: 'page-prdinfo-payroll',
  templateUrl: 'prdinfo-payroll.html',
})
export class PrdinfoPayrollPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdinfoPayrollPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppProductPage);
  }
}
