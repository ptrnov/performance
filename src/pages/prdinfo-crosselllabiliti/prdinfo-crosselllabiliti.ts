import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProductPage } from '../../pages/app-product/app-product';


@IonicPage()
@Component({
  selector: 'page-prdinfo-crosselllabiliti',
  templateUrl: 'prdinfo-crosselllabiliti.html',
})
export class PrdinfoCrosselllabilitiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdinfoCrosselllabilitiPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppProductPage);
  }

}
