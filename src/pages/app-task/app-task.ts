import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,App, Platform,Tabs,Events,AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { TaskListPage } from '../../pages/task-list/task-list';
import { TaskDraftPage } from '../../pages/task-draft/task-draft';
import { TaskHistoryPage } from '../../pages/task-history/task-history';


@IonicPage()
@Component({
  selector: 'page-app-task',
  templateUrl: 'app-task.html'
})
export class AppTaskPage {
  @ViewChild('tabTask') tabRef:Tabs;

  taskListRoot = TaskListPage;
  taskDraftRoot = TaskDraftPage;
  taskHistoryRoot =TaskHistoryPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public app:App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'AppTaskPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(HomePage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

}
