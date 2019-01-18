import { Component } from '@angular/core';
import { IonicPage, Platform,App,NavController, NavParams } from 'ionic-angular';
import { PrdinfoPayrollPage} from '../../pages/prdinfo-payroll/prdinfo-payroll';
import { PrdinfoPayrollTopupPage} from '../../pages/prdinfo-payroll-topup/prdinfo-payroll-topup';
import { PrdinfoCrossellccPage} from '../../pages/prdinfo-crossellcc/prdinfo-crossellcc';
import { PrdinfoCrosselllabilitiPage} from '../../pages/prdinfo-crosselllabiliti/prdinfo-crosselllabiliti';
import { PrdinfoCrossellscrloanPage} from '../../pages/prdinfo-crossellscrloan/prdinfo-crossellscrloan';
import { PrdinfoCrossellntpPage} from '../../pages/prdinfo-crossellntp/prdinfo-crossellntp';
import { PrdinfoCrossellntbPage} from '../../pages/prdinfo-crossellntb/prdinfo-crossellntb';
import { HomePage} from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-app-product',
  templateUrl: 'app-product.html',
})
export class AppProductPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    public app:App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'AppProductPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(HomePage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppProductPage');
  }



  public payroll(){
    this.navCtrl.setRoot(PrdinfoPayrollPage);
  }

  public payrolltopup(){
    this.navCtrl.setRoot(PrdinfoPayrollTopupPage);
  }

  public cc(){
    this.navCtrl.setRoot(PrdinfoCrossellccPage);
  }

  public labiliti(){
    this.navCtrl.setRoot(PrdinfoCrosselllabilitiPage);
  }
  public loan(){
    this.navCtrl.setRoot(PrdinfoCrossellscrloanPage);
  }
  public ntp(){
    this.navCtrl.setRoot(PrdinfoCrossellntpPage);
  }
  public ntb(){
    this.navCtrl.setRoot(PrdinfoCrossellntbPage);
  }

  public kembali(){
    this.navCtrl.setRoot(HomePage);
  }


}
