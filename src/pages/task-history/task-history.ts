import { Component } from '@angular/core';
import { IonicPage, Platform, App,NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { getDataCustomer} from "./data";

@IonicPage()
@Component({
  selector: 'page-task-history',
  templateUrl: 'task-history.html',
})
export class TaskHistoryPage {

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
      if(activeView.name === 'TaskHistoryPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.parent.select(1);
          }
          console.log("back=",activeView.name);
      }
    });
    this.timelinePic=getDataCustomer;
  }
}
