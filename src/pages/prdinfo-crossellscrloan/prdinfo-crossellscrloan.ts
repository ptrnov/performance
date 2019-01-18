import { Component } from '@angular/core';
import { IonicPage, ModalController,NavController, NavParams } from 'ionic-angular';
import { AppProductPage } from '../../pages/app-product/app-product';
import { LoanCalcPage } from '../../pages/loan-calc/loan-calc';
@IonicPage()
@Component({
  selector: 'page-prdinfo-crossellscrloan',
  templateUrl: 'prdinfo-crossellscrloan.html',
})
export class PrdinfoCrossellscrloanPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdinfoCrossellscrloanPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppProductPage);
  }
  public loanCal(){
    var ModalAdduser = this.modalCtrl.create(LoanCalcPage);
    ModalAdduser.onDidDismiss(() => {
      // this.ionViewDidLoad();
    });
    ModalAdduser.present();
  }
}
