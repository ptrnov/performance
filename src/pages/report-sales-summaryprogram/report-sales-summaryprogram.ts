import { Component } from '@angular/core';
import { IonicPage, Platform, App,NavController, NavParams } from 'ionic-angular';
import { AppReportPage} from '../../pages/app-report/app-report';
import { getDataCustomer} from "./data";

@IonicPage()
@Component({
  selector: 'page-report-sales-summaryprogram',
  templateUrl: 'report-sales-summaryprogram.html',
})
export class ReportSalesSummaryprogramPage {
  timelinePic

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
      if(activeView.name === 'ReportSalesSummaryprogramPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(AppReportPage);
          }
          console.log("back=",activeView.name);
      }
    });
    this.timelinePic=getDataCustomer;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportSalesSummaryprogramPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppReportPage);
  }
}
