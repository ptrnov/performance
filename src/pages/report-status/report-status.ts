import { Component } from '@angular/core';
import { IonicPage,Platform, App, NavController, NavParams } from 'ionic-angular';
import { getDataCustomer} from "./data";
import { AppReportPage} from '../../pages/app-report/app-report';
import { from } from 'rxjs/observable/from';
import { ReportStatusDetailPage} from '../../pages/report-status-detail/report-status-detail';

@IonicPage()
@Component({
  selector: 'page-report-status',
  templateUrl: 'report-status.html',
})
export class ReportStatusPage {
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
      if(activeView.name === 'ReportStatusPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(AppReportPage);
          }
          console.log("back=",activeView.name);
      }
    });
    this.timelinePic=getDataCustomer;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportStatusPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppReportPage);
  }

  public btnview(){
    this.navCtrl.setRoot(ReportStatusDetailPage);
  }


}
