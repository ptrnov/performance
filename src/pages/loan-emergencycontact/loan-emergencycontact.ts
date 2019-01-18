import { Component } from '@angular/core';
import { IonicPage, Platform,App,NavController, NavParams } from 'ionic-angular';
import { getKota,getKodepos} from "./data";

@IonicPage()
@Component({
  selector: 'page-loan-emergencycontact',
  templateUrl: 'loan-emergencycontact.html',
})
export class LoanEmergencycontactPage {
  aryKota;
  aryKodepos;
  kodepos;

  serialDataEmergency = {
    "data_emergency":{
      "nama": "",
      "hubungan": "",
      "alamat_tinggal_sekarang": "",
      "kota": "",
      "kodepos": "",
      "telepon_rumah": "",
      "nomor_ponsel": ""
    }
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform:Platform,
    public app:App
  ) {
    this.aryKota=getKota;
    console.log("payah=",getKota);
    this.aryKodepos=getKodepos;

    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'LoanEmergencycontactPage') {
          if (nav.canGoBack()){}else{
            // this.tabRef.select(0);
            this.navCtrl.parent.select(1);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  public kotaChange(event: Event){

    var kodeposX=[];
    console.log("klota=",this.aryKodepos);
    kodeposX.push(this.aryKodepos.filter(function(obj){
      return obj.id==event;
    }));
    console.log("klota=",kodeposX);
    this.kodepos=kodeposX[0];
  }

  btnNext() {
    this.navCtrl.parent.select(3);
  }

}
