import { Component } from '@angular/core';
import { IonicPage, Platform, App, NavController, NavParams } from 'ionic-angular';
import { ReportStatusPage} from '../../pages/report-status/report-status';


@IonicPage()
@Component({
  selector: 'page-report-status-detail',
  templateUrl: 'report-status-detail.html',
})
export class ReportStatusDetailPage {

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
      if(activeView.name === 'ReportStatusDetailPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(ReportStatusPage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportStatusDetailPage');
  }

  public kembali(){
    this.navCtrl.setRoot(ReportStatusPage);
  }
}
