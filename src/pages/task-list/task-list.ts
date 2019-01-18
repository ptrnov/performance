import { Component } from '@angular/core';
import { IonicPage, Platform, App,NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { getDataCustomer} from "./data";


@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {
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
      if(activeView.name === 'TaskListPage') {
          if (nav.canGoBack()){}else{
            // this.navCtrl.push(AppformPage);
            // this.navCtrl.setRoot(AppformPage);
            this.app.getRootNav().setRoot(HomePage);
          }
          console.log("back=",activeView.name);
      }
    });
    this.timelinePic=getDataCustomer;
  }

  public kembali(){
    this.app.getRootNav().setRoot(HomePage);
  }
}
