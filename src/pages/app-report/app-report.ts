import { Component } from '@angular/core';
import { IonicPage, Platform,App,NavController, NavParams } from 'ionic-angular';
import { ReportStatusPage} from '../../pages/report-status/report-status';
import { ReportStatusDetailPage} from '../../pages/report-status-detail/report-status-detail';
import { ReportSalesSummaryPage} from '../../pages/report-sales-summary/report-sales-summary';
import { ReportSalesSummaryprogramPage} from '../../pages/report-sales-summaryprogram/report-sales-summaryprogram';
import { ReportTopagentPage} from '../../pages/report-topagent/report-topagent';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-app-report',
  templateUrl: 'app-report.html',
})
export class AppReportPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    public app:App
  ){
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'AppReportPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(HomePage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppReportPage');
  }

  public reportStatus(){
    this.navCtrl.setRoot(ReportStatusPage);
  }

  public reportStatusDetail(){
    this.navCtrl.setRoot(ReportStatusDetailPage);
  }

  public reportSalesSummary(){
    this.navCtrl.setRoot(ReportSalesSummaryPage);
  }

  public reportSalesSummaryprogram(){
    this.navCtrl.setRoot(ReportSalesSummaryprogramPage);
  }
  public reportTopagent(){
    this.navCtrl.setRoot(ReportTopagentPage);
  }

  public kembali(){
    this.navCtrl.setRoot(HomePage);
  }
}
