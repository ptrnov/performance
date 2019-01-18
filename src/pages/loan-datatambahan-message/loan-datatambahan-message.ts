import { Component } from '@angular/core';
import { IonicPage, App, ViewController,NavController, NavParams } from 'ionic-angular';
import { ReportStatusPage } from '../../pages/report-status/report-status';
import { LoanPage} from '../../pages/loan/loan';

@IonicPage()
@Component({
  selector: 'page-loan-datatambahan-message',
  templateUrl: 'loan-datatambahan-message.html',
})
export class LoanDatatambahanMessagePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app:App,
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanDatatambahanMessagePage');
  }

  public selesai(){
    // this.navCtrl.push(LoanDatatambahanEvidancePage);
    // this.navCtrl.setRoot(HomePage);
    // this.navCtrl.removeView();
    // this.viewCtrl.dismiss();
    // this.navCtrl.pop();
    this.app.getRootNav().setRoot(ReportStatusPage);

  }
}
