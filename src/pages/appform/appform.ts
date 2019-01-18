import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App, Platform,Events,AlertController } from 'ionic-angular';
import { LoanPage } from '../../pages/loan/loan';
import { HomePage } from '../../pages/home/home';


@IonicPage()
@Component({
  selector: 'page-appform',
  templateUrl: 'appform.html',
})
export class AppformPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public app:App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'AppformPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(HomePage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppformPage');
  }

  public loanform(): void{
    this.navCtrl.setRoot(LoanPage);
  }

  public kembali(){
    this.navCtrl.setRoot(HomePage);

  }
}
