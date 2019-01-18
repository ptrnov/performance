import { Component,ViewChild } from '@angular/core';
import { IonicPage, Platform,App, NavController,MenuController, Tabs } from 'ionic-angular';
import { LoanPengajuanPage} from '../loan-pengajuan/loan-pengajuan';
import { LoanDatadiriPage} from '../loan-datadiri/loan-datadiri';
import { LoanEmergencycontactPage} from '../loan-emergencycontact/loan-emergencycontact';
import { LoanPekerjaanPenghasilanPage} from '../loan-pekerjaan-penghasilan/loan-pekerjaan-penghasilan';
import { LoanDatatambahanPage} from '../loan-datatambahan/loan-datatambahan';
import { AppformPage } from '../../pages/appform/appform';

@IonicPage()
@Component({
  selector: 'page-loan',
  templateUrl: 'loan.html'
})
export class LoanPage {
  @ViewChild('myTabs') tabRef:Tabs;

  loanPengajuanRoot = LoanPengajuanPage;
  loanDatadiriRoot = LoanDatadiriPage;
  loanEmergencycontactRoot = LoanEmergencycontactPage;
  loanPekerjaanPenghasilanRoot = LoanPekerjaanPenghasilanPage;
  loanDatatambahanRoot = LoanDatatambahanPage;
  constructor(
    public navCtrl: NavController,
    public MenuCtrl: MenuController,
    public platform: Platform,
    public app:App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'LoanPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.push(AppformPage);
          }
          console.log("back=",activeView.name);
      }else if(activeView.name === 'LoanPengajuanPage'){
        if (nav.canGoBack()){}else{
          this.tabRef.select(0);
        }
      }
    });

    // this.tabRef.select(2);
    // this.app.getActiveNav()[0].parent.select(1);
  }

  // public forwardTabs(){
  //   this.navCtrl.parent.select(2);
  // }

  ionViewDidEnter() {
    // this.tabRef.select(2);
   }
}
