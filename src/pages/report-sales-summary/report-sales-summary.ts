import { Component } from '@angular/core';
import { IonicPage, Platform, App,NavController, NavParams } from 'ionic-angular';
import { AppReportPage} from '../../pages/app-report/app-report';


@IonicPage()
@Component({
  selector: 'page-report-sales-summary',
  templateUrl: 'report-sales-summary.html',
})
export class ReportSalesSummaryPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public app: App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'ReportSalesSummaryPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(AppReportPage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportSalesSummaryPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppReportPage);
  }
}
